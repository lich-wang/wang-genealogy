---
schema: wang-person/v1
id: p_M5B7SxK83UpkrLpzZWB3P7
status: active
merged_into: null
display_name: 王志凝
cbdb_id: 154139
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3hjaRPxfbgtZC1MeNKmHAT
        subject_person_id: p_M5B7SxK83UpkrLpzZWB3P7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志凝，史料所见人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 154139 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3qzPifaA7xAHf3y1SEVnVe
          claim_id: c_3hjaRPxfbgtZC1MeNKmHAT
          source_id: s_NANd6KM6L7cKWN9e3gDG46
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NANd6KM6L7cKWN9e3gDG46
            source_type: api_record
            title: 维基数据：王志凝（Q45623332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623332
            external_identifier: Q45623332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_HzrqlzFvpyrR81aNiUQI6W
          claim_id: c_3hjaRPxfbgtZC1MeNKmHAT
          source_id: s_psuT8QwJ2zxVs6KEi8KjET
          stance: supports
          locator: CBDB:154139
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_psuT8QwJ2zxVs6KEi8KjET
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志凝（154139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154139&o=json
            external_identifier: CBDB:154139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.643Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7nNAjENEdpfwSq3kQwqCrX
        subject_person_id: p_M5B7SxK83UpkrLpzZWB3P7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志凝
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cJzPnWhQwvKf4MCKRAH9hF
          claim_id: c_7nNAjENEdpfwSq3kQwqCrX
          source_id: s_NANd6KM6L7cKWN9e3gDG46
          stance: supports
          locator: Q45623332
          quotation: null
          interpretation_note: null
          source:
            id: s_NANd6KM6L7cKWN9e3gDG46
            source_type: api_record
            title: 维基数据：王志凝（Q45623332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623332
            external_identifier: Q45623332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_fKnaEtDy82eCotKHwQfc9x
          claim_id: c_7nNAjENEdpfwSq3kQwqCrX
          source_id: s_psuT8QwJ2zxVs6KEi8KjET
          stance: supports
          locator: Q45623332
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pTmSp9CyzZPAq9H5uJYn7o
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M5B7SxK83UpkrLpzZWB3P7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FwR99uNHP8UdpguyBGcPXy
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_842fPHTiuXebkgrsSQy6Wc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻（140992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json
            external_identifier: CBDB:140992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.350Z
            metadata_json: null
        - id: cs_mG82jNJCbybuSN4nYAs9kG
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_sPiZmLzQMDEvNDeeJwiCGQ
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_NANd6KM6L7cKWN9e3gDG46
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NANd6KM6L7cKWN9e3gDG46
            source_type: api_record
            title: 维基数据：王志凝（Q45623332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623332
            external_identifier: Q45623332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_QbpzE6Sa8iunWwEG7n7v6U
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_psuT8QwJ2zxVs6KEi8KjET
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_psuT8QwJ2zxVs6KEi8KjET
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志凝（154139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154139&o=json
            external_identifier: CBDB:154139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.643Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志凝，史料所见人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 154139 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志凝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |

## 外部来源

- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：王志凝（Q45623332）](https://www.wikidata.org/wiki/Q45623332)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
- [CBDB 中国历代人物传记资料库：王志凝（154139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154139&o=json)
