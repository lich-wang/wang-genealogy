---
schema: wang-person/v1
id: p_tc8tLCyEu49sXcAYbw2GP6
status: active
merged_into: null
display_name: 王訚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sD4qTWa5P6RaqLTg5dZxn
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訚，明人物。中国历代人物传记资料库（CBDB）以人物编号 217867 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gx4qEZQDgBUPkDKL5PcPwL
          claim_id: c_8sD4qTWa5P6RaqLTg5dZxn
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_yyMntTR4Mat6o21M9UEfQS
          claim_id: c_8sD4qTWa5P6RaqLTg5dZxn
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: CBDB:217867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ub9ZomX4NcFY5GpeLj5pja
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王誾（217867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json
            external_identifier: CBDB:217867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.598Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FicWovrbCr5UWgPN5uS2zR
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p1mrZSWn7siBn7KbKM473z
          claim_id: c_FicWovrbCr5UWgPN5uS2zR
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: Q45614438
          quotation: null
          interpretation_note: null
          source:
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_xmHrJ24pVtWESewX9denzW
          claim_id: c_FicWovrbCr5UWgPN5uS2zR
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: Q45614438
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

# 王訚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王訚，明人物。中国历代人物传记资料库（CBDB）以人物编号 217867 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王訚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王訚（Q45614438）](https://www.wikidata.org/wiki/Q45614438)
- [CBDB 中国历代人物传记资料库：王誾（217867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json)
