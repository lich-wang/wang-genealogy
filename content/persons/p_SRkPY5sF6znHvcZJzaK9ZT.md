---
schema: wang-person/v1
id: p_SRkPY5sF6znHvcZJzaK9ZT
status: active
merged_into: null
display_name: 王慶平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7X47bko5Trbd7BVyxaVro1
        subject_person_id: p_SRkPY5sF6znHvcZJzaK9ZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V2PTJZp55q4nMxstqyGMDN
          claim_id: c_7X47bko5Trbd7BVyxaVro1
          source_id: s_fgip4Co9bnGUSAZGrrFdDa
          stance: supports
          locator: CBDB:637933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637933）
          source: &a1
            id: s_fgip4Co9bnGUSAZGrrFdDa
            source_type: api_record
            title: 中国历代人物传记资料库：王慶平（CBDB 637933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637933&o=json
            external_identifier: CBDB:637933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zrkQZ28fNWN3Vbjm7asCi9
        subject_person_id: p_SRkPY5sF6znHvcZJzaK9ZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶平，清人物。籍贯上海，入仕進士，曾任郎中、主事。（中国历代人物传记资料库 CBDB 637933）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G10RTDn_eTcOx454Ra9uQc
          claim_id: c_zrkQZ28fNWN3Vbjm7asCi9
          source_id: s_fgip4Co9bnGUSAZGrrFdDa
          stance: supports
          locator: CBDB:637933
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

# 王慶平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶平 | accepted |
| bio.summary | 王慶平，清人物。籍贯上海，入仕進士，曾任郎中、主事。（中国历代人物传记资料库 CBDB 637933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶平（CBDB 637933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637933&o=json)
