---
schema: wang-person/v1
id: p_xD51Nz4rSAkq5zdMahqJPm
status: active
merged_into: null
display_name: 王儔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x6TnNMXUUFcMiwq1fXetNK
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7thZG11QkeMQmiB8BjNnAA
          claim_id: c_x6TnNMXUUFcMiwq1fXetNK
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: CBDB:37158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37158）
          source: &a1
            id: s_WPi7kxzgVh5TtLVo7kn3DJ
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 37158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json
            external_identifier: CBDB:37158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5ydVE4rLMqxnep4nKPzKr
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔，宋人物。籍贯義烏，身份为孝子/孝女，曾任從政郎、司法參軍。（中国历代人物传记资料库 CBDB 37158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BcfXBooOWE8Ksi3RW7w55c
          claim_id: c_H5ydVE4rLMqxnep4nKPzKr
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: CBDB:37158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ROurSGv01N23yjwWO2z2Z
        subject_person_id: p_5GnA47Cgm5MBJ7VM1ouCen
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EM3p9e6X7S-2V-TQDNqGse
          claim_id: c_3ROurSGv01N23yjwWO2z2Z
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1237：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5GnA47Cgm5MBJ7VM1ouCen
        status: active
        display_name: 王慶長
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LYXehTOd0s6MGkzjaVbCu7
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UVez4FnLWyc74fhAocnKqR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFqZPHHmyplb69HNGe5GYZ
          claim_id: c_LYXehTOd0s6MGkzjaVbCu7
          source_id: s_FGsawhBemoAIZxXVyOLhlK
          stance: supports
          locator: CBDB 双向互证（妻子 陳氏(陳正彚女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FGsawhBemoAIZxXVyOLhlK
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(陳正彚女)（CBDB 386577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386577&o=json
            external_identifier: CBDB:386577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UVez4FnLWyc74fhAocnKqR
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_6TstPQI4OICmR9KBSvofqN
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOO3hxyltSL_3UUdOMzHNC
          claim_id: c_6TstPQI4OICmR9KBSvofqN
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（孫 王儔 ⇄ 祖父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L4DnLA3g6o2C8iwvdjkTk9
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 386572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json
            external_identifier: CBDB:386572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dbnj6E8kMUFP6rJiZMSDLw
        status: active
        display_name: 王說
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儔 | accepted |
| bio.summary | 王儔，宋人物。籍贯義烏，身份为孝子/孝女，曾任從政郎、司法參軍。（中国历代人物传记资料库 CBDB 37158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GnA47Cgm5MBJ7VM1ouCen | 王慶長 | accepted |
| spouses | p_UVez4FnLWyc74fhAocnKqR | 陳氏 | accepted |
| ancestors | p_Dbnj6E8kMUFP6rJiZMSDLw | 王說 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(陳正彚女)（CBDB 386577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386577&o=json)
- [中国历代人物传记资料库：王儔（CBDB 37158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json)
- [中国历代人物传记资料库：王說（CBDB 386572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json)
