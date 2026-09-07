---
schema: wang-person/v1
id: p_LFjdt9p5AsmDgzGet1fXc3
status: active
merged_into: null
display_name: 王广渊
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVk2wFZ4RtvWxEieiJDF5o
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王广渊，宋人物。CBDB 记录其籍贯记录为洹水，身份包括王安石新法支持者，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HDHxZAgrcwtqj1VhVFKdbh
          claim_id: c_uVk2wFZ4RtvWxEieiJDF5o
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_0cUBVph3Vovv_Y83KTyjUA
          claim_id: c_uVk2wFZ4RtvWxEieiJDF5o
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: CBDB:1844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QjoVfXquRF7d1NQKdvr5zA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣淵（1844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json
            external_identifier: CBDB:1844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.622Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CyPzzywz1UYrbKg6S3y4r9
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广渊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XUJKNdHghe7xN9Dt6hNo7Y
          claim_id: c_CyPzzywz1UYrbKg6S3y4r9
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: Q45359566
          quotation: null
          interpretation_note: null
          source:
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_pKqUwhELJnG6UFahK9888n
          claim_id: c_CyPzzywz1UYrbKg6S3y4r9
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: Q45359566
          quotation: null
          interpretation_note: null
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

# 王广渊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王广渊，宋人物。CBDB 记录其籍贯记录为洹水，身份包括王安石新法支持者，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王广渊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王广渊（Q45359566）](https://www.wikidata.org/wiki/Q45359566)
- [CBDB 中国历代人物传记资料库：王廣淵（1844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json)
