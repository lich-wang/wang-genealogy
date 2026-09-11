---
schema: wang-person/v1
id: p_GjWD7h39FkCFD496pSDkWb
status: active
merged_into: null
display_name: 詹枚
revision: 1
cbdb_id: 119308
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XztWmJeszqAfcN6klTC3w
        subject_person_id: p_GjWD7h39FkCFD496pSDkWb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 詹枚
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5-RNGsPqCyYmh1O9U-xcTH
          claim_id: c_8XztWmJeszqAfcN6klTC3w
          source_id: s_3h_a2uaCsmz-pKZ_hvBRUc
          stance: supports
          locator: CBDB:119308
          quotation: null
          interpretation_note: CBDB 明确记录的王貞儀配偶
          source: &a1
            id: s_3h_a2uaCsmz-pKZ_hvBRUc
            source_type: api_record
            title: 中国历代人物传记资料库：詹枚（CBDB 119308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119308&o=json
            external_identifier: CBDB:119308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XrGECmOrq9HqOAOfFJSTvs
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GjWD7h39FkCFD496pSDkWb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xjmJzfyJEVWsvHblvun5gC
          claim_id: c_XrGECmOrq9HqOAOfFJSTvs
          source_id: s_3h_a2uaCsmz-pKZ_hvBRUc
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #222, HuWenKai #236：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bdBYdAwGEQps4VzzUZtuJT
        status: active
        display_name: 王貞儀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 詹枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 詹枚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bdBYdAwGEQps4VzzUZtuJT | 王貞儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：詹枚（CBDB 119308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119308&o=json)
