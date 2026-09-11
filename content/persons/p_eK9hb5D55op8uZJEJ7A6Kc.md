---
schema: wang-person/v1
id: p_eK9hb5D55op8uZJEJ7A6Kc
status: active
merged_into: null
display_name: 王鳳儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yzBUVBTx7TNZcQxRRDZVd3
        subject_person_id: p_eK9hb5D55op8uZJEJ7A6Kc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E813SbGFRtQNb9BwpnWUWh
          claim_id: c_yzBUVBTx7TNZcQxRRDZVd3
          source_id: s_NTpK3wQXYJNHM2fimC1Uk7
          stance: supports
          locator: CBDB:640948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640948）
          source: &a1
            id: s_NTpK3wQXYJNHM2fimC1Uk7
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 640948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640948&o=json
            external_identifier: CBDB:640948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNripoSHrSoTVs4nKafu2S
        subject_person_id: p_eK9hb5D55op8uZJEJ7A6Kc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀，清人物。籍贯懷慶府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TnJlW8nAehnxkqq267foW0
          claim_id: c_yNripoSHrSoTVs4nKafu2S
          source_id: s_NTpK3wQXYJNHM2fimC1Uk7
          stance: supports
          locator: CBDB:640948
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

# 王鳳儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳儀 | accepted |
| bio.summary | 王鳳儀，清人物。籍贯懷慶府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳儀（CBDB 640948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640948&o=json)
