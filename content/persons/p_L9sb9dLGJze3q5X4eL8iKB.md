---
schema: wang-person/v1
id: p_L9sb9dLGJze3q5X4eL8iKB
status: active
merged_into: null
display_name: 王錫穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7T4CA1jmh9FnmNfiwfAi5z
        subject_person_id: p_L9sb9dLGJze3q5X4eL8iKB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SVCUZHpjp1A9aJdueEMuxA
          claim_id: c_7T4CA1jmh9FnmNfiwfAi5z
          source_id: s_JPFDX6khYG93FSJPpW66L2
          stance: supports
          locator: CBDB:640614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640614）
          source: &a1
            id: s_JPFDX6khYG93FSJPpW66L2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫穀（CBDB 640614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640614&o=json
            external_identifier: CBDB:640614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bE8nGhn7XGev7Xktzitdu7
        subject_person_id: p_L9sb9dLGJze3q5X4eL8iKB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫穀，清人物。籍贯興國，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640614）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2F6fueaVUn-24-1vSNZBWH
          claim_id: c_bE8nGhn7XGev7Xktzitdu7
          source_id: s_JPFDX6khYG93FSJPpW66L2
          stance: supports
          locator: CBDB:640614
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

# 王錫穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫穀 | accepted |
| bio.summary | 王錫穀，清人物。籍贯興國，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640614） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫穀（CBDB 640614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640614&o=json)
