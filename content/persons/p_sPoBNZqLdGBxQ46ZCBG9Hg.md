---
schema: wang-person/v1
id: p_sPoBNZqLdGBxQ46ZCBG9Hg
status: active
merged_into: null
display_name: 王士會
cbdb_id: 32342
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QJf3RLmJnBySCCPheCGo33
        subject_person_id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士會，史料所见人物。本项目依据《中国历代人物传记资料库：王士會（CBDB 32342）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QO8FjwuPSCfAYBPmMa9M7v
          claim_id: c_QJf3RLmJnBySCCPheCGo33
          source_id: s_zE48etVpAABDJ7LWiZBxKh
          stance: supports
          locator: CBDB:32342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zE48etVpAABDJ7LWiZBxKh
            source_type: api_record
            title: 中国历代人物传记资料库：王士會（CBDB 32342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32342&o=json
            external_identifier: CBDB:32342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dkQDc3v18JBi3eyN5am4E2
        subject_person_id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aEsFZYqKNPzRBqGFYC75AF
          claim_id: c_dkQDc3v18JBi3eyN5am4E2
          source_id: s_zE48etVpAABDJ7LWiZBxKh
          stance: supports
          locator: CBDB:32342
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z2W-sj4CHqgEICvsBtblkf
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7g4Ib5SUbPAaJTX_dJOaq7
          claim_id: c_z2W-sj4CHqgEICvsBtblkf
          source_id: s_zE48etVpAABDJ7LWiZBxKh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zE48etVpAABDJ7LWiZBxKh
            source_type: api_record
            title: 中国历代人物传记资料库：王士會（CBDB 32342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32342&o=json
            external_identifier: CBDB:32342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GsA3E3fpoGBL3KAwr5V6BX
        status: active
        display_name: 王德玄
        merged_into_person_id: null
  children:
    - claim:
        id: c_yHh2pcdBiOz39JkN7duv6b
        subject_person_id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iNKWqc7216f4rhV2nxAyz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N0Jv2ly-9Ss4auKiKAWIMJ
          claim_id: c_yHh2pcdBiOz39JkN7duv6b
          source_id: s_jFK1nutNqP6dnUo6kczws9
          stance: supports
          locator: CBDB 双向互证（父 王士會 ⇄ 子 王守一）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jFK1nutNqP6dnUo6kczws9
            source_type: api_record
            title: 中国历代人物传记资料库：王守一（CBDB 32343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json
            external_identifier: CBDB:32343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iNKWqc7216f4rhV2nxAyz7
        status: active
        display_name: 王守一
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士會，史料所见人物。本项目依据《中国历代人物传记资料库：王士會（CBDB 32342）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士會 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GsA3E3fpoGBL3KAwr5V6BX | 王德玄 | accepted |
| children | p_iNKWqc7216f4rhV2nxAyz7 | 王守一 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士會（CBDB 32342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32342&o=json)
- [中国历代人物传记资料库：王守一（CBDB 32343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json)
