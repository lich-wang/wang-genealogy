---
schema: wang-person/v1
id: p_6dA6pUfXVo1vdV8CNBd1Mx
status: active
merged_into: null
display_name: 王晉春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDxkGTLgm7T3XH1p5yEx5C
        subject_person_id: p_6dA6pUfXVo1vdV8CNBd1Mx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eo55YfF3WDvu9MF79ygxJZ
          claim_id: c_KDxkGTLgm7T3XH1p5yEx5C
          source_id: s_DfV7F3d8k6HYuH2GNxWqgL
          stance: supports
          locator: CBDB:638456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638456）
          source: &a1
            id: s_DfV7F3d8k6HYuH2GNxWqgL
            source_type: api_record
            title: 中国历代人物传记资料库：王晉春（CBDB 638456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638456&o=json
            external_identifier: CBDB:638456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFKGCFXwd2c41zGr84LBTL
        subject_person_id: p_6dA6pUfXVo1vdV8CNBd1Mx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉春，清人物。籍贯江南蘇松常鎮太道，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 638456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_soidU-1qpBbviZLa2Htbk7
          claim_id: c_cFKGCFXwd2c41zGr84LBTL
          source_id: s_DfV7F3d8k6HYuH2GNxWqgL
          stance: supports
          locator: CBDB:638456
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

# 王晉春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉春 | accepted |
| bio.summary | 王晉春，清人物。籍贯江南蘇松常鎮太道，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 638456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉春（CBDB 638456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638456&o=json)
