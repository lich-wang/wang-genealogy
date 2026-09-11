---
schema: wang-person/v1
id: p_okT8NSaAK4W9U6Kxgf8vBB
status: active
merged_into: null
display_name: 王慕孫
cbdb_id: 514243
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qpMN16tC2Wi3qKKgyHCq3c
        subject_person_id: p_okT8NSaAK4W9U6Kxgf8vBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕孫，清人物。中国历代人物传记资料库（CBDB）以人物编号 514243 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sizx9XWS4hUPLpbl8UwbZb
          claim_id: c_qpMN16tC2Wi3qKKgyHCq3c
          source_id: s_C5Wh6tiKGSwRNNgR1kiQ2W
          stance: supports
          locator: CBDB:514243
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_C5Wh6tiKGSwRNNgR1kiQ2W
            source_type: api_record
            title: 中国历代人物传记资料库：王慕孫（CBDB 514243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514243&o=json
            external_identifier: CBDB:514243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ce3eez5AFWfyxARDjzB9gi
        subject_person_id: p_okT8NSaAK4W9U6Kxgf8vBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7K9htPED4gnBQQbHykDQFk
          claim_id: c_ce3eez5AFWfyxARDjzB9gi
          source_id: s_C5Wh6tiKGSwRNNgR1kiQ2W
          stance: supports
          locator: CBDB:514243
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_C5Wh6tiKGSwRNNgR1kiQ2W
            source_type: api_record
            title: 中国历代人物传记资料库：王慕孫（CBDB 514243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514243&o=json
            external_identifier: CBDB:514243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_396H6L5ZS7TO-c3nUtCINv
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_okT8NSaAK4W9U6Kxgf8vBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d70gv2jEG6oJuadExk828u
          claim_id: c_396H6L5ZS7TO-c3nUtCINv
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4j2jjxfAtAgmNjeAv2sgPb
            source_type: api_record
            title: 中国历代人物传记资料库：王文韶（CBDB 57121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json
            external_identifier: CBDB:57121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYhPRV6epSdj5Hnzj57TC6
        status: active
        display_name: 王文韶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慕孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慕孫，清人物。中国历代人物传记资料库（CBDB）以人物编号 514243 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王慕孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_fYhPRV6epSdj5Hnzj57TC6 | 王文韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慕孫（CBDB 514243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514243&o=json)
- [中国历代人物传记资料库：王文韶（CBDB 57121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json)
