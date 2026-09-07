---
schema: wang-person/v1
id: p_aPt93kSHDUyNC8ZF6JTLpf
status: active
merged_into: null
display_name: 陈安石
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCefsf4q8VcpHH8FzkxcQV
        subject_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "陈安石，宋人物。CBDB 记录其籍贯记录为河陽，入仕记录为科舉: 進士(籠統)，曾任尚書省戶部侍郎、光祿寺丞。中国历代人物传记资料库（CBDB）以人物编号 17 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3DO5Gx_Wb85vu0Z3YTUevA
          claim_id: c_wCefsf4q8VcpHH8FzkxcQV
          source_id: s_zHw44da223wjYSNZs8E9Rc
          stance: supports
          locator: CBDB:17
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zHw44da223wjYSNZs8E9Rc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳安石（17）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17&o=json
            external_identifier: CBDB:17
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.918Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KG5jkREWzhEGveSTKVWki9
        subject_person_id: p_aPt93kSHDUyNC8ZF6JTLpf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈安石
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3sWmxK3tDLFZyM4vPy83M9
          claim_id: c_KG5jkREWzhEGveSTKVWki9
          source_id: s_zHw44da223wjYSNZs8E9Rc
          stance: supports
          locator: Q45354659
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_che9dSbcWgYLys4PM8uWU7
          claim_id: c_KG5jkREWzhEGveSTKVWki9
          source_id: s_uT7rQc9RE3KNJYZUmJEYXj
          stance: supports
          locator: Q45354659
          quotation: null
          interpretation_note: null
          source:
            id: s_uT7rQc9RE3KNJYZUmJEYXj
            source_type: api_record
            title: 维基数据：陈安石（Q45354659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45354659
            external_identifier: Q45354659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E5%AE%89%E7%9F%B3
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

# 陈安石

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈安石，宋人物。CBDB 记录其籍贯记录为河陽，入仕记录为科舉: 進士(籠統)，曾任尚書省戶部侍郎、光祿寺丞。中国历代人物传记资料库（CBDB）以人物编号 17 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈安石 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：陈安石（Q45354659）](https://www.wikidata.org/wiki/Q45354659)
- [CBDB 中国历代人物传记资料库：陳安石（17）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17&o=json)
