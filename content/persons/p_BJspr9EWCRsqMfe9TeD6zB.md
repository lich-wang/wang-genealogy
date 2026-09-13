---
schema: wang-person/v1
id: p_BJspr9EWCRsqMfe9TeD6zB
status: active
merged_into: null
display_name: 王謀文
cbdb_id: 54793
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VSFSqvviJsDTh3tM6bYxJz
        subject_person_id: p_BJspr9EWCRsqMfe9TeD6zB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謀文，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 54793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fuBU_VPXkfPLhEKlB1cnt5
          claim_id: c_VSFSqvviJsDTh3tM6bYxJz
          source_id: s_1HesjFF3JcykJfBctGy11N
          stance: supports
          locator: CBDB:54793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1HesjFF3JcykJfBctGy11N
            source_type: api_record
            title: 中国历代人物传记资料库：王謀文（CBDB 54793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54793&o=json
            external_identifier: CBDB:54793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_byChNywhCPTpC9nJ927TJ3
        subject_person_id: p_BJspr9EWCRsqMfe9TeD6zB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謀文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zHqY9HH3yyo4YPRV85JAws
          claim_id: c_byChNywhCPTpC9nJ927TJ3
          source_id: s_1HesjFF3JcykJfBctGy11N
          stance: supports
          locator: CBDB:54793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jDkWsKVsqufY4ttCAh-gjd
        subject_person_id: p_BJspr9EWCRsqMfe9TeD6zB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbEqJGRaFhuXHQgBZ7cj7G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XIDDNqG13VV-A4NZuudsG
          claim_id: c_jDkWsKVsqufY4ttCAh-gjd
          source_id: s_87mkkcmajZfVqP4buQ9gEk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #165, HuWenKai #237：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_87mkkcmajZfVqP4buQ9gEk
            source_type: api_record
            title: 中国历代人物传记资料库：王倩（CBDB 54792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54792&o=json
            external_identifier: CBDB:54792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PbEqJGRaFhuXHQgBZ7cj7G
        status: active
        display_name: 王倩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謀文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王謀文，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 54793） | accepted |
| name.primary | 王謀文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PbEqJGRaFhuXHQgBZ7cj7G | 王倩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謀文（CBDB 54793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54793&o=json)
- [中国历代人物传记资料库：王倩（CBDB 54792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54792&o=json)
