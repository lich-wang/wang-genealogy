---
schema: wang-person/v1
id: p_qqKc8n9y92oNgsCDACGR7S
status: active
merged_into: null
display_name: 王澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JyVa3MB7MJYFDaMsPnB319
        subject_person_id: p_qqKc8n9y92oNgsCDACGR7S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPEaz2mchYvxgHvtTTCYf7
          claim_id: c_JyVa3MB7MJYFDaMsPnB319
          source_id: s_EuXbsF2ErhHmJ522Q8z8WW
          stance: supports
          locator: CBDB:260640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260640）
          source: &a1
            id: s_EuXbsF2ErhHmJ522Q8z8WW
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 260640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json
            external_identifier: CBDB:260640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NmpEfVDK9rV12uLHCArnhe
        subject_person_id: p_qqKc8n9y92oNgsCDACGR7S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aJZ9epl35usw66hUahiaLM
          claim_id: c_NmpEfVDK9rV12uLHCArnhe
          source_id: s_EuXbsF2ErhHmJ522Q8z8WW
          stance: supports
          locator: CBDB:260640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sHelVOsEwEFut-W2d2Tcv7
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qqKc8n9y92oNgsCDACGR7S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsij_Tq4w1otm7ZOle6tVE
          claim_id: c_sHelVOsEwEFut-W2d2Tcv7
          source_id: s_Wb4MeMq0y-5tzrMJZ4yEwY
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王澤 之父／母。
          source:
            id: s_Wb4MeMq0y-5tzrMJZ4yEwY
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 260640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json
            external_identifier: CBDB:260640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_28NTyBLMjfT3cDQJaIuB3q
        subject_person_id: p_qqKc8n9y92oNgsCDACGR7S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy_7LhJFn9R9lARvVJLTVX
          claim_id: c_28NTyBLMjfT3cDQJaIuB3q
          source_id: s_Wb4MeMq0y-5tzrMJZ4yEwY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wb4MeMq0y-5tzrMJZ4yEwY
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 260640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json
            external_identifier: CBDB:260640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 260640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json)
