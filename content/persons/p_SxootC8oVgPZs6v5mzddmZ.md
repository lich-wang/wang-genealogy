---
schema: wang-person/v1
id: p_SxootC8oVgPZs6v5mzddmZ
status: active
merged_into: null
display_name: 田氏
revision: 1
cbdb_id: 255596
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_62C9HPkMIMv6FHbtjMbJTI
        subject_person_id: p_SxootC8oVgPZs6v5mzddmZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O85egSUuv9qITubrUV2Uot
          claim_id: c_62C9HPkMIMv6FHbtjMbJTI
          source_id: s_uQ2xkm3VKiKpZpaJCf-lPK
          stance: supports
          locator: CBDB:255596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uQ2xkm3VKiKpZpaJCf-lPK
            source_type: api_record
            title: 中国历代人物传记资料库：田氏(王敞妻)（CBDB 255596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255596&o=json
            external_identifier: CBDB:255596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajz8Z06SKa634PqpHGQeG2
        subject_person_id: p_SxootC8oVgPZs6v5mzddmZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0naFV5f0_YSaudYMO2vKff
          claim_id: c_ajz8Z06SKa634PqpHGQeG2
          source_id: s_uQ2xkm3VKiKpZpaJCf-lPK
          stance: supports
          locator: CBDB:255596
          quotation: null
          interpretation_note: CBDB 明确记录的王敞配偶
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
        id: c_fuGETem3pEJ8FAPlYvpZwv
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SxootC8oVgPZs6v5mzddmZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPb4WjtcGgKSs5blnOcOGr
          claim_id: c_fuGETem3pEJ8FAPlYvpZwv
          source_id: s_uQ2xkm3VKiKpZpaJCf-lPK
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8CKJNGVaripT3AVjGSTRgL
        status: active
        display_name: 王敞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 田氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 田氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255596） | accepted |
| name.primary | 田氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8CKJNGVaripT3AVjGSTRgL | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：田氏(王敞妻)（CBDB 255596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255596&o=json)
