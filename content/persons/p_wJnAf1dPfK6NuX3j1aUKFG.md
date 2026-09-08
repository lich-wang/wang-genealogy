---
schema: wang-person/v1
id: p_wJnAf1dPfK6NuX3j1aUKFG
status: active
merged_into: null
display_name: 王宪武
cbdb_id: 333593
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U3p3oKQuMDPSpRXQRd3go4
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王宪武，明人物。CBDB 记录其籍贯记录为山陰，入仕记录为科舉: 考上會試/貢士。中国历代人物传记资料库（CBDB）以人物编号 333593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kxBfCKQ3ZzFPH2aumG12M1
          claim_id: c_U3p3oKQuMDPSpRXQRd3go4
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: null
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
        - id: cs_RqfMeQbAKZZrjwlEPhmkMr
          claim_id: c_U3p3oKQuMDPSpRXQRd3go4
          source_id: s_J23XJvdkBCD2w4w4zBoeDd
          stance: supports
          locator: CBDB:333593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J23XJvdkBCD2w4w4zBoeDd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王憲武（333593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333593&o=json
            external_identifier: CBDB:333593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.748Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hXSTgT7fKaxZEvNj6vrrmP
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宪武
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_24L8N52TpjVMpXkBjeaifu
          claim_id: c_hXSTgT7fKaxZEvNj6vrrmP
          source_id: s_J23XJvdkBCD2w4w4zBoeDd
          stance: supports
          locator: Q45581425
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jYr2brM31tLbDpKPjjf92p
          claim_id: c_hXSTgT7fKaxZEvNj6vrrmP
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: Q45581425
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
      object_person:
        id: p_n8gJ8LAH7u4tCjt15ALE93
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  children:
    - claim:
        id: c_rVYyyNVZ8LHRwnoMHxz8B2
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bcrM1JDUkTLmV6rQDefNJN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EvsZ1q6bUmAjRYrR3Bj6Mq
          claim_id: c_rVYyyNVZ8LHRwnoMHxz8B2
          source_id: s_AuA2yr99XkuCuaLucat2XA
          stance: supports
          locator: P40（子女）
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
        - id: cs_TX5gF7DKGJQBphw4EcsF8x
          claim_id: c_rVYyyNVZ8LHRwnoMHxz8B2
          source_id: s_KpdKQDm85BhFx3TLa2zEy4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KpdKQDm85BhFx3TLa2zEy4
            source_type: api_record
            title: 维基数据：王家屏（Q15926237）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15926237
            external_identifier: Q15926237
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:30.744Z
            metadata_json: null
      object_person:
        id: p_bcrM1JDUkTLmV6rQDefNJN
        status: active
        display_name: 王家屏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宪武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宪武，明人物。CBDB 记录其籍贯记录为山陰，入仕记录为科舉: 考上會試/貢士。中国历代人物传记资料库（CBDB）以人物编号 333593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宪武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n8gJ8LAH7u4tCjt15ALE93 | 王朝用 | accepted |
| children | p_bcrM1JDUkTLmV6rQDefNJN | 王家屏 | accepted |

## 外部来源

- [维基数据：王朝用（Q45581362）](https://www.wikidata.org/wiki/Q45581362)
- [维基数据：王家屏（Q15926237）](https://www.wikidata.org/wiki/Q15926237)
- [维基数据：王宪武（Q45581425）](https://www.wikidata.org/wiki/Q45581425)
- [CBDB 中国历代人物传记资料库：王憲武（333593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333593&o=json)
