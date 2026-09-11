---
schema: wang-person/v1
id: p_1zwB6xABMDF7Tq9242WmSf
status: active
merged_into: null
display_name: 王耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GLPMiKoeC6pHKzhf1wMuzD
        subject_person_id: p_1zwB6xABMDF7Tq9242WmSf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vF2QV6M2CrWCQSkF3giurb
          claim_id: c_GLPMiKoeC6pHKzhf1wMuzD
          source_id: s_QCBRE6RYaZYHgVNVNmg39Y
          stance: supports
          locator: CBDB:701556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701556）
          source: &a1
            id: s_QCBRE6RYaZYHgVNVNmg39Y
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 701556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701556&o=json
            external_identifier: CBDB:701556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cmNwg61SPu1R6nDB6cLigH
        subject_person_id: p_1zwB6xABMDF7Tq9242WmSf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王耀，清人物。籍贯錢塘，身份为隱居不仕、史學家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701556）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H5v-BFgh8icKwo_0mtRjlE
          claim_id: c_cmNwg61SPu1R6nDB6cLigH
          source_id: s_QCBRE6RYaZYHgVNVNmg39Y
          stance: supports
          locator: CBDB:701556
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

# 王耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀 | accepted |
| bio.summary | 王耀，清人物。籍贯錢塘，身份为隱居不仕、史學家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀（CBDB 701556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701556&o=json)
