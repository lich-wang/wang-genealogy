---
schema: wang-person/v1
id: p_igCtmJ34q9gbxGMJ3KYXqz
status: active
merged_into: null
display_name: 王殿颺
cbdb_id: 29996
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8ud7Ks8DfpJnkd28iiuFs
        subject_person_id: p_igCtmJ34q9gbxGMJ3KYXqz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿颺，清人物。籍贯寶坻，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 29996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__aDRSDAn-9kIcF4CqTviWD
          claim_id: c_p8ud7Ks8DfpJnkd28iiuFs
          source_id: s_g8qpGL8FTENMc6W8ok2QYa
          stance: supports
          locator: CBDB:29996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g8qpGL8FTENMc6W8ok2QYa
            source_type: api_record
            title: 中国历代人物传记资料库：王殿颺（CBDB 29996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29996&o=json
            external_identifier: CBDB:29996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4E2eg3FAprA2bymtu1ScGr
        subject_person_id: p_igCtmJ34q9gbxGMJ3KYXqz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿颺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jedPLzoJVB5Z3NYTKBzLBu
          claim_id: c_4E2eg3FAprA2bymtu1ScGr
          source_id: s_g8qpGL8FTENMc6W8ok2QYa
          stance: supports
          locator: CBDB:29996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LuGBQC0Ibnw0GOxB4GdCLA
        subject_person_id: p_r1BYh7SUzgLDzCcXK6R8wH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igCtmJ34q9gbxGMJ3KYXqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xbgC0KO4RQRATD29tH6Eqb
          claim_id: c_LuGBQC0Ibnw0GOxB4GdCLA
          source_id: s_9gWPE5ciJevrk5kxjSjrj8
          stance: supports
          locator: CBDB 双向互证（子 王殿颺 ⇄ 父 王兆麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9gWPE5ciJevrk5kxjSjrj8
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麟（CBDB 29998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29998&o=json
            external_identifier: CBDB:29998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r1BYh7SUzgLDzCcXK6R8wH
        status: active
        display_name: 王兆麟
        merged_into_person_id: null
  children:
    - claim:
        id: c_iC9j1G5dL-DJo0z-K2rFzX
        subject_person_id: p_igCtmJ34q9gbxGMJ3KYXqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YCA4LiXzzszFmPwAPKHu75
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hd2O1qV_CnUbF6PQuM69_v
          claim_id: c_iC9j1G5dL-DJo0z-K2rFzX
          source_id: s_g8qpGL8FTENMc6W8ok2QYa
          stance: supports
          locator: CBDB 双向互证（子 王宣詔 ⇄ 父 王殿颺）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_g8qpGL8FTENMc6W8ok2QYa
            source_type: api_record
            title: 中国历代人物传记资料库：王殿颺（CBDB 29996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29996&o=json
            external_identifier: CBDB:29996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YCA4LiXzzszFmPwAPKHu75
        status: active
        display_name: 王宣詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王殿颺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王殿颺，清人物。籍贯寶坻，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 29996） | accepted |
| name.primary | 王殿颺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_r1BYh7SUzgLDzCcXK6R8wH | 王兆麟 | accepted |
| children | p_YCA4LiXzzszFmPwAPKHu75 | 王宣詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王殿颺（CBDB 29996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29996&o=json)
- [中国历代人物传记资料库：王兆麟（CBDB 29998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29998&o=json)
