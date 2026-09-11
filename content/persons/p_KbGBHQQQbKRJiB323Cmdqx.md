---
schema: wang-person/v1
id: p_KbGBHQQQbKRJiB323Cmdqx
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 212300
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1sUWj4Kl-qXERrk1PLKXkp
        subject_person_id: p_KbGBHQQQbKRJiB323Cmdqx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212300）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEh28Pbw8Am59LjByVfZot
          claim_id: c_1sUWj4Kl-qXERrk1PLKXkp
          source_id: s_El80vI06f8KErKKnrUKXiw
          stance: supports
          locator: CBDB:212300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_El80vI06f8KErKKnrUKXiw
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王應選妻)（CBDB 212300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212300&o=json
            external_identifier: CBDB:212300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfJpGDDupPH_zDMEkNz2Ul
        subject_person_id: p_KbGBHQQQbKRJiB323Cmdqx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qB4Z7wVEMBH6vTtoTfSGEV
          claim_id: c_JfJpGDDupPH_zDMEkNz2Ul
          source_id: s_El80vI06f8KErKKnrUKXiw
          stance: supports
          locator: CBDB:212300
          quotation: null
          interpretation_note: CBDB 明确记录的王應選配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hpMTWDB69MIOXqPRgnho8M
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KbGBHQQQbKRJiB323Cmdqx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNr56flgO03oaHiRlg2P8T
          claim_id: c_hpMTWDB69MIOXqPRgnho8M
          source_id: s_El80vI06f8KErKKnrUKXiw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVj3x7bTLNfdzZiuwDwTNz
        status: active
        display_name: 王應選
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 212300） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DVj3x7bTLNfdzZiuwDwTNz | 王應選 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王應選妻)（CBDB 212300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212300&o=json)
