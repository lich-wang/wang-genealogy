---
schema: wang-person/v1
id: p_yWVC23hzSUsYCD3NwnfPLE
status: active
merged_into: null
display_name: 王瓊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TiQAxXr61qGpK47cjFbyfc
        subject_person_id: p_yWVC23hzSUsYCD3NwnfPLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3L3pchXeQDqmLDJGhCUeKH
          claim_id: c_TiQAxXr61qGpK47cjFbyfc
          source_id: s_9ksh2j1dVnHq3PR6CatNJJ
          stance: supports
          locator: CBDB:159058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159058）
          source: &a1
            id: s_9ksh2j1dVnHq3PR6CatNJJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 159058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159058&o=json
            external_identifier: CBDB:159058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gYhXoYJQpCTunZut9fsBQX
        subject_person_id: p_yWVC23hzSUsYCD3NwnfPLE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，唐人物。籍贯三原。（中国历代人物传记资料库 CBDB 159058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dW0tf50k1_7sPG0QvYyrq5
          claim_id: c_gYhXoYJQpCTunZut9fsBQX
          source_id: s_9ksh2j1dVnHq3PR6CatNJJ
          stance: supports
          locator: CBDB:159058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LXABCM3u0ebrDdwR-e4wEh
        subject_person_id: p_yWVC23hzSUsYCD3NwnfPLE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_158f7PNpeKDhP8PqDUi5rA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WM5sWWxUcb6rHPYFvJPi0a
          claim_id: c_LXABCM3u0ebrDdwR-e4wEh
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 33702：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QLDimjK4ySvbqQYyeCU6yH
            source_type: api_record
            title: 中国历代人物传记资料库：王馴（CBDB 159059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json
            external_identifier: CBDB:159059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_158f7PNpeKDhP8PqDUi5rA
        status: active
        display_name: 王馴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fcsCE8JM1KlRqED098E1Jx
        subject_person_id: p_yWVC23hzSUsYCD3NwnfPLE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZuFC93AY6BQ8RYk1LeSddc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRm4memnC_Wdi5B3BXVWly
          claim_id: c_fcsCE8JM1KlRqED098E1Jx
          source_id: s_9ksh2j1dVnHq3PR6CatNJJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 28：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZuFC93AY6BQ8RYk1LeSddc
        status: active
        display_name: 王常散
        merged_into_person_id: null
  other: []
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，唐人物。籍贯三原。（中国历代人物传记资料库 CBDB 159058） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_158f7PNpeKDhP8PqDUi5rA | 王馴 | accepted |
| descendants | p_ZuFC93AY6BQ8RYk1LeSddc | 王常散 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 159058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159058&o=json)
- [中国历代人物传记资料库：王馴（CBDB 159059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json)
