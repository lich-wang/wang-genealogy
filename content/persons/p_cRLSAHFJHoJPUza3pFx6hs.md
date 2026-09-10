---
schema: wang-person/v1
id: p_cRLSAHFJHoJPUza3pFx6hs
status: active
merged_into: null
display_name: 王永錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sU8wGd7fxRAjB3d9Q1gvnk
        subject_person_id: p_cRLSAHFJHoJPUza3pFx6hs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xGNSxH5HFnfHa1a8THps71
          claim_id: c_sU8wGd7fxRAjB3d9Q1gvnk
          source_id: s_gYP13PV6s3zbn67eujxrDQ
          stance: supports
          locator: CBDB:12123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12123）
          source: &a1
            id: s_gYP13PV6s3zbn67eujxrDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王永錫（CBDB 12123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12123&o=json
            external_identifier: CBDB:12123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_668tMXg391Pcf4gL2SFaX3
        subject_person_id: p_cRLSAHFJHoJPUza3pFx6hs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7pq2MC4y8ghFZAcQgPwtZ
          claim_id: c_668tMXg391Pcf4gL2SFaX3
          source_id: s_gYP13PV6s3zbn67eujxrDQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kEdV_d9ZRV59mF5EIV8qc_
        subject_person_id: p_cRLSAHFJHoJPUza3pFx6hs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_11QT6G8zMZ2KEb6RXCMf9i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mLD_ZEiGm-0k8oabc_yBTo
          claim_id: c_kEdV_d9ZRV59mF5EIV8qc_
          source_id: s_9TQW4Q16DZe37taJP5JP9C
          stance: supports
          locator: PersonKinshipInfo：父（王永錫）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9TQW4Q16DZe37taJP5JP9C
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 12126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12126&o=json
            external_identifier: CBDB:12126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11QT6G8zMZ2KEb6RXCMf9i
        status: active
        display_name: 王悅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永錫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_11QT6G8zMZ2KEb6RXCMf9i | 王悅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永錫（CBDB 12123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12123&o=json)
- [中国历代人物传记资料库：王悅（CBDB 12126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12126&o=json)
