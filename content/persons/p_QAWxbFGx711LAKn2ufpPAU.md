---
schema: wang-person/v1
id: p_QAWxbFGx711LAKn2ufpPAU
status: active
merged_into: null
display_name: 王登雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpXdnxj753PfBtgdSErzDa
        subject_person_id: p_QAWxbFGx711LAKn2ufpPAU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fpZb6kz2G9sEu4U3RQ2uV
          claim_id: c_wpXdnxj753PfBtgdSErzDa
          source_id: s_G5BpEUwjzL1kLnbdesGDQV
          stance: supports
          locator: CBDB:60988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60988）
          source: &a1
            id: s_G5BpEUwjzL1kLnbdesGDQV
            source_type: api_record
            title: 中国历代人物传记资料库：王登雲（CBDB 60988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60988&o=json
            external_identifier: CBDB:60988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_onJKFPvoN5TsDiJVSCj1k6
        subject_person_id: p_QAWxbFGx711LAKn2ufpPAU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登雲，清人物。明清進士進士，籍贯太倉直隸州，入仕進士，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 60988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gf-0AFSJOykCNPdObnvxt9
          claim_id: c_onJKFPvoN5TsDiJVSCj1k6
          source_id: s_G5BpEUwjzL1kLnbdesGDQV
          stance: supports
          locator: CBDB:60988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王登雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登雲 | accepted |
| bio.summary | 王登雲，清人物。明清進士進士，籍贯太倉直隸州，入仕進士，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 60988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登雲（CBDB 60988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60988&o=json)
