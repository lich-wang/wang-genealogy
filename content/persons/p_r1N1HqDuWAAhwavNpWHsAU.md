---
schema: wang-person/v1
id: p_r1N1HqDuWAAhwavNpWHsAU
status: active
merged_into: null
display_name: 王藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v9xLQyEGpU91BV2wb21832
        subject_person_id: p_r1N1HqDuWAAhwavNpWHsAU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yvAMj3M9cZoqvW8oDaa4Eu
          claim_id: c_v9xLQyEGpU91BV2wb21832
          source_id: s_PnmH334Q8aFezLXJoqtC3n
          stance: supports
          locator: CBDB:499449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499449）
          source: &a1
            id: s_PnmH334Q8aFezLXJoqtC3n
            source_type: api_record
            title: 中国历代人物传记资料库：王藩（CBDB 499449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499449&o=json
            external_identifier: CBDB:499449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sHZDUP9R271VB1LvKPqWrE
        subject_person_id: p_r1N1HqDuWAAhwavNpWHsAU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藩，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4AnsEEaQ38EbgGo6WYvBB
          claim_id: c_sHZDUP9R271VB1LvKPqWrE
          source_id: s_PnmH334Q8aFezLXJoqtC3n
          stance: supports
          locator: CBDB:499449
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

# 王藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藩 | accepted |
| bio.summary | 王藩，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藩（CBDB 499449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499449&o=json)
