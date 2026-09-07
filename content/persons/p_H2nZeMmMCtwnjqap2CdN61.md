---
schema: wang-person/v1
id: p_H2nZeMmMCtwnjqap2CdN61
status: active
merged_into: null
display_name: 王贞淑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Vdwx8EjZbGF2A75rDNFV5
        subject_person_id: p_H2nZeMmMCtwnjqap2CdN61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞淑，明人物。中国历代人物传记资料库（CBDB）以人物编号 123026 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Qc6xajKpjADG26QC6ufD7Y
          claim_id: c_4Vdwx8EjZbGF2A75rDNFV5
          source_id: s_GWy8NVeiDkvyLN5b6N5CTi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GWy8NVeiDkvyLN5b6N5CTi
            source_type: api_record
            title: 维基数据：王贞淑（Q45662658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662658
            external_identifier: Q45662658
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_CLYph4retDRLjtOMucDkuA
          claim_id: c_4Vdwx8EjZbGF2A75rDNFV5
          source_id: s_4W7zpJ6YbUVPw2Mp3oSU2f
          stance: supports
          locator: CBDB:123026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4W7zpJ6YbUVPw2Mp3oSU2f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貞淑（123026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123026&o=json
            external_identifier: CBDB:123026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.336Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GED9rocaoWDsByySGVV1gr
        subject_person_id: p_H2nZeMmMCtwnjqap2CdN61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞淑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5JNErtkai2B5Ty1m3NsMMd
          claim_id: c_GED9rocaoWDsByySGVV1gr
          source_id: s_4W7zpJ6YbUVPw2Mp3oSU2f
          stance: supports
          locator: Q45662658
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_htV9W819TUkkyCVjeb5iPY
          claim_id: c_GED9rocaoWDsByySGVV1gr
          source_id: s_GWy8NVeiDkvyLN5b6N5CTi
          stance: supports
          locator: Q45662658
          quotation: null
          interpretation_note: null
          source:
            id: s_GWy8NVeiDkvyLN5b6N5CTi
            source_type: api_record
            title: 维基数据：王贞淑（Q45662658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662658
            external_identifier: Q45662658
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KRGspbW5EQYNPbigQxheoJ
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_H2nZeMmMCtwnjqap2CdN61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7cmJ9ZgShJPrQCe6YNNyHF
          claim_id: c_KRGspbW5EQYNPbigQxheoJ
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：三女
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_H4D49uaAMm6FJc8CCuZypT
          claim_id: c_KRGspbW5EQYNPbigQxheoJ
          source_id: s_GWy8NVeiDkvyLN5b6N5CTi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GWy8NVeiDkvyLN5b6N5CTi
            source_type: api_record
            title: 维基数据：王贞淑（Q45662658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662658
            external_identifier: Q45662658
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_d67Qy8C83uwpjMA8ykQePi
          claim_id: c_KRGspbW5EQYNPbigQxheoJ
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贞淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贞淑，明人物。中国历代人物传记资料库（CBDB）以人物编号 123026 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王贞淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |

## 外部来源

- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [维基数据：王贞淑（Q45662658）](https://www.wikidata.org/wiki/Q45662658)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
- [CBDB 中国历代人物传记资料库：王貞淑（123026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123026&o=json)
