---
schema: wang-person/v1
id: p_QHxmQDTQCpGLmDZqqWdL7U
status: active
merged_into: null
display_name: 王弦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jcETHD11eZLkHzLkCShT2u
        subject_person_id: p_QHxmQDTQCpGLmDZqqWdL7U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弦，唐人物。CBDB 记录其籍贯记录为河東。中国历代人物传记资料库（CBDB）以人物编号 32177 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xZfLvdZpPVbF4EmAXb8PX7
          claim_id: c_jcETHD11eZLkHzLkCShT2u
          source_id: s_CkpwCAFuLfszgzWqBB6uvG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CkpwCAFuLfszgzWqBB6uvG
            source_type: api_record
            title: 维基数据：王弦（Q45421041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421041
            external_identifier: Q45421041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:27.371Z
            metadata_json: null
        - id: cs_KnRjiuZdvBv2c3kmaQMYZ2
          claim_id: c_jcETHD11eZLkHzLkCShT2u
          source_id: s_VrXEVBFSubt7wze6RTFY9F
          stance: supports
          locator: CBDB:32177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VrXEVBFSubt7wze6RTFY9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王絃（32177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32177&o=json
            external_identifier: CBDB:32177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:27.502Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K6D5kBQyg5mFW3KwcZGgEP
        subject_person_id: p_QHxmQDTQCpGLmDZqqWdL7U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M9Kuw5ZXu4GoG3D7XLgwYD
          claim_id: c_K6D5kBQyg5mFW3KwcZGgEP
          source_id: s_CkpwCAFuLfszgzWqBB6uvG
          stance: supports
          locator: Q45421041
          quotation: null
          interpretation_note: null
          source:
            id: s_CkpwCAFuLfszgzWqBB6uvG
            source_type: api_record
            title: 维基数据：王弦（Q45421041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421041
            external_identifier: Q45421041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:27.371Z
            metadata_json: null
        - id: cs_iBMWu4rRYGCZ83CR4324HB
          claim_id: c_K6D5kBQyg5mFW3KwcZGgEP
          source_id: s_VrXEVBFSubt7wze6RTFY9F
          stance: supports
          locator: Q45421041
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CVZz8tmh8gAGkZefhFG1S1
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QHxmQDTQCpGLmDZqqWdL7U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ltpu5cBi4XeNAxiMYGFvfz
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_W2X7rowYmQUUfkSAfPQqDx
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_kAXk97YK5D33SNck5t447g
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_CkpwCAFuLfszgzWqBB6uvG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CkpwCAFuLfszgzWqBB6uvG
            source_type: api_record
            title: 维基数据：王弦（Q45421041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421041
            external_identifier: Q45421041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:27.371Z
            metadata_json: null
        - id: cs_3GE1Hkcn55ZgAC13V6tviB
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_VrXEVBFSubt7wze6RTFY9F
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_VrXEVBFSubt7wze6RTFY9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王絃（32177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32177&o=json
            external_identifier: CBDB:32177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:27.502Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弦，唐人物。CBDB 记录其籍贯记录为河東。中国历代人物传记资料库（CBDB）以人物编号 32177 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |

## 外部来源

- [维基数据：王弦（Q45421041）](https://www.wikidata.org/wiki/Q45421041)
- [維基數據：王处廉（Q45421031）](https://www.wikidata.org/wiki/Q45421031)
- [CBDB 中国历代人物传记资料库：王處廉（32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王絃（32177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32177&o=json)
