---
schema: wang-person/v1
id: p_n8gJ8LAH7u4tCjt15ALE93
status: active
merged_into: null
display_name: 王朝用
cbdb_id: 333592
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PspqAdDRFHgJPBoGYT8k17
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王朝用，明人物。CBDB 记录其入仕记录为貢生: 歲貢、常貢、挨貢。中国历代人物传记资料库（CBDB）以人物编号 333592 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RuYLDKV623FEFe1eDFs8a4
          claim_id: c_PspqAdDRFHgJPBoGYT8k17
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_4gu4oV8XXUSSjHMASEf7Ce
            source_type: api_record
            title: 维基数据：王朝用（Q45581362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581362
            external_identifier: Q45581362
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_zb9QxSWQlLmwNNyE6MkXME
          claim_id: c_PspqAdDRFHgJPBoGYT8k17
          source_id: s_h8JSaC1iQ5SSAsTosEewb9
          stance: supports
          locator: CBDB:333592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h8JSaC1iQ5SSAsTosEewb9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王朝用（333592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333592&o=json
            external_identifier: CBDB:333592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.609Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VasnhTPsnL52e1qtbFtqX6
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AspHGJKUCP824sb6A4WGcd
          claim_id: c_VasnhTPsnL52e1qtbFtqX6
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: Q45581362
          quotation: null
          interpretation_note: null
          source:
            id: s_4gu4oV8XXUSSjHMASEf7Ce
            source_type: api_record
            title: 维基数据：王朝用（Q45581362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581362
            external_identifier: Q45581362
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_YHsLYXcQxmj7dXaFP79Bvr
          claim_id: c_VasnhTPsnL52e1qtbFtqX6
          source_id: s_h8JSaC1iQ5SSAsTosEewb9
          stance: supports
          locator: Q45581362
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r3u1EKLTQEUtNJaWQDqW35
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cx9RfdRHPU59Zs6UF46gge
          claim_id: c_r3u1EKLTQEUtNJaWQDqW35
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_nMNKQ3dB6bHNZ2K75AhMZB
          claim_id: c_r3u1EKLTQEUtNJaWQDqW35
          source_id: s_pBuvbo48p6yG8GAGrmWa5t
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pBuvbo48p6yG8GAGrmWa5t
            source_type: api_record
            title: 维基数据：王缙（Q45581298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581298
            external_identifier: Q45581298
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_JCJBEueLs72MMGKKFXSBqw
        status: active
        display_name: 王缙
        merged_into_person_id: null
  children:
    - claim:
        id: c_DC45vSXiqAMJosRJYqVMM2
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3RATJJQUiaFrCpLDLCCVd
          claim_id: c_DC45vSXiqAMJosRJYqVMM2
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AuA2yr99XkuCuaLucat2XA
            source_type: api_record
            title: 维基数据：王宪武（Q45581425）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581425
            external_identifier: Q45581425
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_CiGmnw753KN22KpT3ZiDz5
          claim_id: c_DC45vSXiqAMJosRJYqVMM2
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝用，明人物。CBDB 记录其入仕记录为貢生: 歲貢、常貢、挨貢。中国历代人物传记资料库（CBDB）以人物编号 333592 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王朝用 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JCJBEueLs72MMGKKFXSBqw | 王缙 | accepted |
| children | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |

## 外部来源

- [维基数据：王朝用（Q45581362）](https://www.wikidata.org/wiki/Q45581362)
- [维基数据：王缙（Q45581298）](https://www.wikidata.org/wiki/Q45581298)
- [维基数据：王宪武（Q45581425）](https://www.wikidata.org/wiki/Q45581425)
- [CBDB 中国历代人物传记资料库：王朝用（333592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333592&o=json)
