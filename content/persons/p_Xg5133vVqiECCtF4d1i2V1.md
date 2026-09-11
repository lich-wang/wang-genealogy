---
schema: wang-person/v1
id: p_Xg5133vVqiECCtF4d1i2V1
status: active
merged_into: null
display_name: 王梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MntA7rCFYNuHDi1tbMcxvq
        subject_person_id: p_Xg5133vVqiECCtF4d1i2V1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_noBbPM3B2A5s6TbU1dHuRo
          claim_id: c_MntA7rCFYNuHDi1tbMcxvq
          source_id: s_qWLvgZDe6Mt3DQ4wkN5EmS
          stance: supports
          locator: CBDB:100801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100801）
          source: &a1
            id: s_qWLvgZDe6Mt3DQ4wkN5EmS
            source_type: api_record
            title: 中国历代人物传记资料库：王梅（CBDB 100801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100801&o=json
            external_identifier: CBDB:100801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QiB9PEzKNf3czQufsm7oZV
        subject_person_id: p_Xg5133vVqiECCtF4d1i2V1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅，元人物。籍贯潞州，曾任端本堂說書、監察御史、禮部侍郎。（中国历代人物传记资料库 CBDB 100801）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jMH3-aT_fokVlkHKCe9MyB
          claim_id: c_QiB9PEzKNf3czQufsm7oZV
          source_id: s_qWLvgZDe6Mt3DQ4wkN5EmS
          stance: supports
          locator: CBDB:100801
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

# 王梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梅 | accepted |
| bio.summary | 王梅，元人物。籍贯潞州，曾任端本堂說書、監察御史、禮部侍郎。（中国历代人物传记资料库 CBDB 100801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梅（CBDB 100801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100801&o=json)
