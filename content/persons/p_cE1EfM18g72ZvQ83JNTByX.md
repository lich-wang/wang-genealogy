---
schema: wang-person/v1
id: p_cE1EfM18g72ZvQ83JNTByX
status: active
merged_into: null
display_name: 王穥
cbdb_id: 437558
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i73wgQH1yBDRJDj6HWK46s
        subject_person_id: p_cE1EfM18g72ZvQ83JNTByX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穥，史料所见人物。本项目依据《中国历代人物传记资料库：王穥（CBDB 437558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TQyY0-25ukZC663XdxZLng
          claim_id: c_i73wgQH1yBDRJDj6HWK46s
          source_id: s_8dcWR3U68kMetgwNpHDhyw
          stance: supports
          locator: CBDB:437558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8dcWR3U68kMetgwNpHDhyw
            source_type: api_record
            title: 中国历代人物传记资料库：王穥（CBDB 437558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437558&o=json
            external_identifier: CBDB:437558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkZhNm7JhrkmxHQB2RKeni
        subject_person_id: p_cE1EfM18g72ZvQ83JNTByX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J6TgPqSoLNT28Ytai1WLwM
          claim_id: c_wkZhNm7JhrkmxHQB2RKeni
          source_id: s_8dcWR3U68kMetgwNpHDhyw
          stance: supports
          locator: CBDB:437558
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mQI4I3UFgi1sSUR0GG0Shk
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cE1EfM18g72ZvQ83JNTByX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bs3He4B6nIjrF0ZbJ-I0BX
          claim_id: c_mQI4I3UFgi1sSUR0GG0Shk
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穥 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_g4VKr2D6htM499vC6zENon
            source_type: api_record
            title: 中国历代人物传记资料库：王文彪（CBDB 101100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json
            external_identifier: CBDB:101100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穥，史料所见人物。本项目依据《中国历代人物传记资料库：王穥（CBDB 437558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王穥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文彪（CBDB 101100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json)
- [中国历代人物传记资料库：王穥（CBDB 437558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437558&o=json)
