---
schema: wang-person/v1
id: p_H4SeMJgEG3cnaAjWBmtY62
status: active
merged_into: null
display_name: 王玉銳
cbdb_id: 143519
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AY9FCRHc6ZshpDPSBwQjUm
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉銳（卒于860年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 143519 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IWLz863y5eaItz4xHgmd6m
          claim_id: c_AY9FCRHc6ZshpDPSBwQjUm
          source_id: s_joJfne8WrwXj7mxUQppnHm
          stance: supports
          locator: CBDB:143519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_joJfne8WrwXj7mxUQppnHm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉銳（CBDB 143519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json
            external_identifier: CBDB:143519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kb1pjz8uo21WVxwtHDCMxV
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0860-01-01
            latest: 0860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VJ6Avm9jDQ7pq11DL2D1fB
          claim_id: c_kb1pjz8uo21WVxwtHDCMxV
          source_id: s_joJfne8WrwXj7mxUQppnHm
          stance: supports
          locator: CBDB:143519
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source:
            id: s_joJfne8WrwXj7mxUQppnHm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉銳（CBDB 143519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json
            external_identifier: CBDB:143519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6v1VRPDNmYUMfLdGerYJMW
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_h2Mgxi8Jkxmcz2GTwHAM3T
          claim_id: c_6v1VRPDNmYUMfLdGerYJMW
          source_id: s_joJfne8WrwXj7mxUQppnHm
          stance: supports
          locator: CBDB:143519
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source:
            id: s_joJfne8WrwXj7mxUQppnHm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉銳（CBDB 143519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json
            external_identifier: CBDB:143519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ptXD-e78FyEXZrVIAriWoT
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DQmGrRn3w1VbM72gBRexhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m0gySt5MDLbHYB1w04dg1N
          claim_id: c_ptXD-e78FyEXZrVIAriWoT
          source_id: s_eNp8uZNj8Br7J5P98ZxknV
          stance: supports
          locator: 唐代墓誌彙編續集，Dazhong079：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eNp8uZNj8Br7J5P98ZxknV
            source_type: api_record
            title: 中国历代人物传记资料库：王坦然（CBDB 512617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512617&o=json
            external_identifier: CBDB:512617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DQmGrRn3w1VbM72gBRexhq
        status: active
        display_name: 王坦然
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c___BaRadgwvYAGzS9nclzlY
        subject_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3ZArzqHeQAQ866n7fJRWyU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zG5_vkCCnS-U7v9AVvj_gL
          claim_id: c___BaRadgwvYAGzS9nclzlY
          source_id: s_r3aVXN5S3dMLV5rj7ozR2f
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong79：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r3aVXN5S3dMLV5rj7ozR2f
            source_type: api_record
            title: 中国历代人物传记资料库：王洪汎（CBDB 167727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167727&o=json
            external_identifier: CBDB:167727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3ZArzqHeQAQ866n7fJRWyU
        status: active
        display_name: 王洪汎
        merged_into_person_id: null
  other: []
---

# 王玉銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉銳（卒于860年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 143519 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 860年 | accepted |
| name.primary | 王玉銳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DQmGrRn3w1VbM72gBRexhq | 王坦然 | accepted |
| descendants | p_3ZArzqHeQAQ866n7fJRWyU | 王洪汎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪汎（CBDB 167727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167727&o=json)
- [中国历代人物传记资料库：王坦然（CBDB 512617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512617&o=json)
- [中国历代人物传记资料库：王玉銳（CBDB 143519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json)
