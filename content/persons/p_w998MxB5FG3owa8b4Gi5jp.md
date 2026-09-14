---
schema: wang-person/v1
id: p_w998MxB5FG3owa8b4Gi5jp
status: active
merged_into: null
display_name: 王昭善
cbdb_id: 287042
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HNHWYKipeBiYFG8Fx6WzkN
        subject_person_id: p_w998MxB5FG3owa8b4Gi5jp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭善，明人物。永樂十年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 287042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_l20UA25X3IBeHJvWinCbsh
          claim_id: c_HNHWYKipeBiYFG8Fx6WzkN
          source_id: s_NmbphCa9wBxbTcC888kYjQ
          stance: supports
          locator: CBDB:287042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NmbphCa9wBxbTcC888kYjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭善（CBDB 287042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287042&o=json
            external_identifier: CBDB:287042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBobE7QgNqP5sji66xBh8i
        subject_person_id: p_w998MxB5FG3owa8b4Gi5jp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GgayzQ24wmSnrtrLd2od3U
          claim_id: c_SBobE7QgNqP5sji66xBh8i
          source_id: s_NmbphCa9wBxbTcC888kYjQ
          stance: supports
          locator: CBDB:287042
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JT8CAEBDXeMZWIfxJpvhxz
        subject_person_id: p_w998MxB5FG3owa8b4Gi5jp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNFa9nhAspUmlw_Vo-LLvq
          claim_id: c_JT8CAEBDXeMZWIfxJpvhxz
          source_id: s_NmbphCa9wBxbTcC888kYjQ
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NmbphCa9wBxbTcC888kYjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭善（CBDB 287042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287042&o=json
            external_identifier: CBDB:287042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wKQiP1EfRixbApmFB2CXep
        status: active
        display_name: 王詢
        merged_into_person_id: null
    - claim:
        id: c_jbaH4-G7F6VB5CqiVz7LS5
        subject_person_id: p_w998MxB5FG3owa8b4Gi5jp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3kbLEyh3L5tbvL3QjK9tvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bpDNZZ4B66qnnOUbNGvRHj
          claim_id: c_jbaH4-G7F6VB5CqiVz7LS5
          source_id: s_5pZpy7gt3PAMpMwcWMes7J
          stance: supports
          locator: CBDB：兄弟 王詢（202367）之父／母 王昭善
          quotation: null
          interpretation_note: 由兄弟关系推断：王穩 与 王詢 为同胞（CBDB 记「弟」），王詢 之父／母即 王穩 之父／母。
          source:
            id: s_5pZpy7gt3PAMpMwcWMes7J
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 287044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287044&o=json
            external_identifier: CBDB:287044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3kbLEyh3L5tbvL3QjK9tvL
        status: active
        display_name: 王穩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭善，明人物。永樂十年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 287042） | accepted |
| name.primary | 王昭善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wKQiP1EfRixbApmFB2CXep | 王詢 | accepted |
| children | p_3kbLEyh3L5tbvL3QjK9tvL | 王穩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穩（CBDB 287044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287044&o=json)
- [中国历代人物传记资料库：王昭善（CBDB 287042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287042&o=json)
