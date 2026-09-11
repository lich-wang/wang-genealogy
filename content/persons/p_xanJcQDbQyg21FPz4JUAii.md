---
schema: wang-person/v1
id: p_xanJcQDbQyg21FPz4JUAii
status: active
merged_into: null
display_name: 王士全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4CgHB2PZYcHXAQUscE5DMc
        subject_person_id: p_xanJcQDbQyg21FPz4JUAii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZzfbXFhFFgiXGGLg3w7CHq
          claim_id: c_4CgHB2PZYcHXAQUscE5DMc
          source_id: s_aKCL9TGA8YNE1q5cMSFv8F
          stance: supports
          locator: CBDB:539590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539590）
          source: &a1
            id: s_aKCL9TGA8YNE1q5cMSFv8F
            source_type: api_record
            title: 中国历代人物传记资料库：王士全（CBDB 539590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539590&o=json
            external_identifier: CBDB:539590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCCq8hphi9p6z1Uki6opLB
        subject_person_id: p_xanJcQDbQyg21FPz4JUAii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士全，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 539590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hQq28x5als0KfYWEXNxjc6
          claim_id: c_FCCq8hphi9p6z1Uki6opLB
          source_id: s_aKCL9TGA8YNE1q5cMSFv8F
          stance: supports
          locator: CBDB:539590
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

# 王士全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士全 | accepted |
| bio.summary | 王士全，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 539590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士全（CBDB 539590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539590&o=json)
