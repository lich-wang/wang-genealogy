---
schema: wang-person/v1
id: p_1Sr2MeB1CXNNgUHXiuspj3
status: active
merged_into: null
display_name: 鄭氏
revision: 1
cbdb_id: 158746
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TJi-xWN7eL6xOrILcNpjF_
        subject_person_id: p_1Sr2MeB1CXNNgUHXiuspj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b2p2YND9udv-66oF7A_U03
          claim_id: c_TJi-xWN7eL6xOrILcNpjF_
          source_id: s_ZzQV6T3ECP8qXsgp5zd4qq
          stance: supports
          locator: CBDB:158746
          quotation: null
          interpretation_note: CBDB 明确记录的王文幹配偶
          source: &a1
            id: s_ZzQV6T3ECP8qXsgp5zd4qq
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王文幹妻)（CBDB 158746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158746&o=json
            external_identifier: CBDB:158746
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
        id: c_igO9gxT5_fGDFZyuaYUKRG
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1Sr2MeB1CXNNgUHXiuspj3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7fQo_WLl6TetCKpGBM74V
          claim_id: c_igO9gxT5_fGDFZyuaYUKRG
          source_id: s_ZzQV6T3ECP8qXsgp5zd4qq
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xT91PgYZaQ28ZWS5H1F1Pb
        status: active
        display_name: 王文幹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xT91PgYZaQ28ZWS5H1F1Pb | 王文幹 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭氏(王文幹妻)（CBDB 158746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158746&o=json)
