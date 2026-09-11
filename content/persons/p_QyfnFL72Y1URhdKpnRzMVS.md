---
schema: wang-person/v1
id: p_QyfnFL72Y1URhdKpnRzMVS
status: active
merged_into: null
display_name: 王宏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDCfnd1poEWEdKShNR9mQy
        subject_person_id: p_QyfnFL72Y1URhdKpnRzMVS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XvyvQ4HKHnmF5p1fHZnkFk
          claim_id: c_HDCfnd1poEWEdKShNR9mQy
          source_id: s_JhoXCKxeEjANEyrNtqhgCN
          stance: supports
          locator: CBDB:138966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138966）
          source: &a1
            id: s_JhoXCKxeEjANEyrNtqhgCN
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 138966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138966&o=json
            external_identifier: CBDB:138966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6QqY7AyRmk718PsL9roWWq
        subject_person_id: p_QyfnFL72Y1URhdKpnRzMVS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 587年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7DNG7JkxXrLJhQazA5hFRb
          claim_id: c_6QqY7AyRmk718PsL9roWWq
          source_id: s_JhoXCKxeEjANEyrNtqhgCN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ajD2TtPCbzx8pWayZj8Kt6
        subject_person_id: p_QyfnFL72Y1URhdKpnRzMVS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 652年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CEdrJ8Hg1FHk1jwnBJ27We
          claim_id: c_ajD2TtPCbzx8pWayZj8Kt6
          source_id: s_JhoXCKxeEjANEyrNtqhgCN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSfhjNw2pqZ9N9U6hpx5gW
        subject_person_id: p_QyfnFL72Y1URhdKpnRzMVS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏（587年—652年），唐人物。籍贯臨沂，曾任大將軍、縣丞、縣令。（中国历代人物传记资料库 CBDB 138966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OqUeyBME-Ov53YjvifQphP
          claim_id: c_HSfhjNw2pqZ9N9U6hpx5gW
          source_id: s_JhoXCKxeEjANEyrNtqhgCN
          stance: supports
          locator: CBDB:138966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vdMYnBKTPlnA7xroTyFsdc
        subject_person_id: p_3Drvq7agAoKqd67sV5dnGF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QyfnFL72Y1URhdKpnRzMVS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9zfq7-_UyNN8084RWse7N
          claim_id: c_vdMYnBKTPlnA7xroTyFsdc
          source_id: s_sAchUZp2AXNAhkTSjVo3Xz
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 48：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sAchUZp2AXNAhkTSjVo3Xz
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 147007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147007&o=json
            external_identifier: CBDB:147007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Drvq7agAoKqd67sV5dnGF
        status: active
        display_name: 王敞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| birth.date | 587年 | accepted |
| death.date | 652年 | accepted |
| bio.summary | 王宏（587年—652年），唐人物。籍贯臨沂，曾任大將軍、縣丞、縣令。（中国历代人物传记资料库 CBDB 138966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3Drvq7agAoKqd67sV5dnGF | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敞（CBDB 147007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147007&o=json)
- [中国历代人物传记资料库：王宏（CBDB 138966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138966&o=json)
