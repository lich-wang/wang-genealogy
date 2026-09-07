---
schema: wang-person/v1
id: p_xGfDhmKCEvrK69xjukGpvw
status: active
merged_into: null
display_name: 王谷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rt7CnjLzEwFgDEL6xAsgjF
        subject_person_id: p_xGfDhmKCEvrK69xjukGpvw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 36881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BZiUkqvTsvdRef2yR6sWEk
          claim_id: c_Rt7CnjLzEwFgDEL6xAsgjF
          source_id: s_96JLax2quZAGvLva1CFjxE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_96JLax2quZAGvLva1CFjxE
            source_type: api_record
            title: 维基数据：王谷（Q45426330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426330
            external_identifier: Q45426330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
        - id: cs_fI-oAfEktBpb_oKeLa5v_C
          claim_id: c_Rt7CnjLzEwFgDEL6xAsgjF
          source_id: s_ZSEgnxMUuaQRKmKPJZuk3i
          stance: supports
          locator: CBDB:36881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZSEgnxMUuaQRKmKPJZuk3i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王穀（36881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36881&o=json
            external_identifier: CBDB:36881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:03.020Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tt3JAivDogHgsFJM3KTms3
        subject_person_id: p_xGfDhmKCEvrK69xjukGpvw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_87fyM46G7Kk1bco5E8GmRb
          claim_id: c_Tt3JAivDogHgsFJM3KTms3
          source_id: s_ZSEgnxMUuaQRKmKPJZuk3i
          stance: supports
          locator: Q45426330
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_T6f6myuAwB77P6Vw1zMBee
          claim_id: c_Tt3JAivDogHgsFJM3KTms3
          source_id: s_96JLax2quZAGvLva1CFjxE
          stance: supports
          locator: Q45426330
          quotation: null
          interpretation_note: null
          source:
            id: s_96JLax2quZAGvLva1CFjxE
            source_type: api_record
            title: 维基数据：王谷（Q45426330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426330
            external_identifier: Q45426330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LKCnDV7i3wZbRFWWoPyrQ2
        subject_person_id: p_Nm2iJSX6JvN22S8n42tuCU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xGfDhmKCEvrK69xjukGpvw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lf9CYKRZVfn8xEkhfRbHeG
          claim_id: c_LKCnDV7i3wZbRFWWoPyrQ2
          source_id: s_WZxztQ1X5HrUXThqKTPoT4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WZxztQ1X5HrUXThqKTPoT4
            source_type: api_record
            title: 维基数据：王直方（Q10415993）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415993
            external_identifier: Q10415993
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_ox8Mk5uUFa53FPVYQvGcCw
          claim_id: c_LKCnDV7i3wZbRFWWoPyrQ2
          source_id: s_i7o4wkRHMa3TMYJFGG8z6R
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_i7o4wkRHMa3TMYJFGG8z6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王直方（13798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json
            external_identifier: CBDB:13798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:37.269Z
            metadata_json: null
        - id: cs_pvMWkGx1A6JB8RY4R8J8G5
          claim_id: c_LKCnDV7i3wZbRFWWoPyrQ2
          source_id: s_96JLax2quZAGvLva1CFjxE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_96JLax2quZAGvLva1CFjxE
            source_type: api_record
            title: 维基数据：王谷（Q45426330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426330
            external_identifier: Q45426330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
      object_person:
        id: p_Nm2iJSX6JvN22S8n42tuCU
        status: active
        display_name: 王直方
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王谷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谷，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 36881 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王谷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Nm2iJSX6JvN22S8n42tuCU | 王直方 | accepted |

## 外部来源

- [维基数据：王谷（Q45426330）](https://www.wikidata.org/wiki/Q45426330)
- [维基数据：王直方（Q10415993）](https://www.wikidata.org/wiki/Q10415993)
- [CBDB 中国历代人物传记资料库：王穀（36881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36881&o=json)
- [CBDB 中国历代人物传记资料库：王直方（13798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json)
