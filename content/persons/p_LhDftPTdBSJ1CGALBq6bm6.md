---
schema: wang-person/v1
id: p_LhDftPTdBSJ1CGALBq6bm6
status: active
merged_into: null
display_name: 王铭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VShyeuG9uBe5ahpNVDD4iW
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭，明人物。中国历代人物传记资料库（CBDB）以人物编号 222284 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JfPHvqu99ymHVuxdSJBRAN
          claim_id: c_VShyeuG9uBe5ahpNVDD4iW
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_F9Mri2PURAb1LHFviet2Zn
            source_type: api_record
            title: 维基数据：王铭（Q45580879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580879
            external_identifier: Q45580879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_I7E_xWPSVDG9txdigtyjpO
          claim_id: c_VShyeuG9uBe5ahpNVDD4iW
          source_id: s_4YQ9r3CVSoUk3P8YrMEEJd
          stance: supports
          locator: CBDB:222284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4YQ9r3CVSoUk3P8YrMEEJd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銘（222284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222284&o=json
            external_identifier: CBDB:222284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.059Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBRwD6mdZsDhxQtekooiVi
        subject_person_id: p_LhDftPTdBSJ1CGALBq6bm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NXZU9kL8MLyBbjH1xcVicN
          claim_id: c_kBRwD6mdZsDhxQtekooiVi
          source_id: s_4YQ9r3CVSoUk3P8YrMEEJd
          stance: supports
          locator: Q45580879
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_sRHaHgGdFWkYm3z8CDVd81
          claim_id: c_kBRwD6mdZsDhxQtekooiVi
          source_id: s_F9Mri2PURAb1LHFviet2Zn
          stance: supports
          locator: Q45580879
          quotation: null
          interpretation_note: null
          source:
            id: s_F9Mri2PURAb1LHFviet2Zn
            source_type: api_record
            title: 维基数据：王铭（Q45580879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45580879
            external_identifier: Q45580879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
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

# 王铭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铭，明人物。中国历代人物传记资料库（CBDB）以人物编号 222284 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王铭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王铭（Q45580879）](https://www.wikidata.org/wiki/Q45580879)
- [CBDB 中国历代人物传记资料库：王銘（222284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222284&o=json)
