---
schema: wang-person/v1
id: p_CAvsHnvDp4ThnbdvbLHgDj
status: active
merged_into: null
display_name: 王維
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hganC3vHnsKumiX13LfKgG
        subject_person_id: p_CAvsHnvDp4ThnbdvbLHgDj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MxS8pUeEY42U6tejVnm7Lp
          claim_id: c_hganC3vHnsKumiX13LfKgG
          source_id: s_tNK9NJeZEK5rM7P4N8hhoZ
          stance: supports
          locator: CBDB:483046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483046）
          source: &a1
            id: s_tNK9NJeZEK5rM7P4N8hhoZ
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 483046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483046&o=json
            external_identifier: CBDB:483046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GM7R32aC1SMqAuWDNnFidk
        subject_person_id: p_CAvsHnvDp4ThnbdvbLHgDj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維，明人物。曾任典史。（中国历代人物传记资料库 CBDB 483046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yMv8iNABAP33P_vxet2l9y
          claim_id: c_GM7R32aC1SMqAuWDNnFidk
          source_id: s_tNK9NJeZEK5rM7P4N8hhoZ
          stance: supports
          locator: CBDB:483046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維 | accepted |
| bio.summary | 王維，明人物。曾任典史。（中国历代人物传记资料库 CBDB 483046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維（CBDB 483046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483046&o=json)
