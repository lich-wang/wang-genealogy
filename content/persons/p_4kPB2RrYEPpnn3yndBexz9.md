---
schema: wang-person/v1
id: p_4kPB2RrYEPpnn3yndBexz9
status: active
merged_into: null
display_name: 應氏
revision: 1
cbdb_id: 266764
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YZqxYUaWPWaqX-wlEabeYc
        subject_person_id: p_4kPB2RrYEPpnn3yndBexz9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 應氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 266764）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_red7ZPPO-5CBr7SY2cO6Yb
          claim_id: c_YZqxYUaWPWaqX-wlEabeYc
          source_id: s_5aqyerNB411JGeiMNZmSJf
          stance: supports
          locator: CBDB:266764
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5aqyerNB411JGeiMNZmSJf
            source_type: api_record
            title: 中国历代人物传记资料库：應氏(王瓚妻)（CBDB 266764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266764&o=json
            external_identifier: CBDB:266764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-UUVZmc2mb9ZwEhYEclDRA
        subject_person_id: p_4kPB2RrYEPpnn3yndBexz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 應氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6qwGZZXYBtmHNV9PcQKT2
          claim_id: c_-UUVZmc2mb9ZwEhYEclDRA
          source_id: s_5aqyerNB411JGeiMNZmSJf
          stance: supports
          locator: CBDB:266764
          quotation: null
          interpretation_note: CBDB 明确记录的王瓚配偶
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
        id: c_CsO6TMWq7U21bWoWJhTegc
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4kPB2RrYEPpnn3yndBexz9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ev5LpSdxx5n5P3Q6CI8ZYh
          claim_id: c_CsO6TMWq7U21bWoWJhTegc
          source_id: s_5aqyerNB411JGeiMNZmSJf
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 應氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 應氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 266764） | accepted |
| name.primary | 應氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：應氏(王瓚妻)（CBDB 266764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266764&o=json)
