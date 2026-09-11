---
schema: wang-person/v1
id: p_XfMqsim2Q2nawMwLbryQH7
status: active
merged_into: null
display_name: 王履
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4qdWN1axtLisGXcxBX7hsd
        subject_person_id: p_XfMqsim2Q2nawMwLbryQH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73ptpH2V278DnK47fWQv5k
          claim_id: c_4qdWN1axtLisGXcxBX7hsd
          source_id: s_C9qGHu1UUNU7kJagkfjdjb
          stance: supports
          locator: CBDB:21951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21951）
          source: &a1
            id: s_C9qGHu1UUNU7kJagkfjdjb
            source_type: api_record
            title: 中国历代人物传记资料库：王履（CBDB 21951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21951&o=json
            external_identifier: CBDB:21951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XLcqWr44N73SsA31CMeCNV
        subject_person_id: p_XfMqsim2Q2nawMwLbryQH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履，宋人物。籍贯開封，入仕進士。（中国历代人物传记资料库 CBDB 21951）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IrUJwu5XLhqdCerrqMwsu9
          claim_id: c_XLcqWr44N73SsA31CMeCNV
          source_id: s_C9qGHu1UUNU7kJagkfjdjb
          stance: supports
          locator: CBDB:21951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Olu5e1h523mo_BKkYfThL6
        subject_person_id: p_W44g431hpyjCWntUoJZtFF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XfMqsim2Q2nawMwLbryQH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N_-XcAVEha2rhN57fQT_X5
          claim_id: c_Olu5e1h523mo_BKkYfThL6
          source_id: s_Lu61XsjBFZtYz4ckNJDLbz
          stance: supports
          locator: CBDB 双向互证（子 王履 ⇄ 父 王潤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Lu61XsjBFZtYz4ckNJDLbz
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 21950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21950&o=json
            external_identifier: CBDB:21950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W44g431hpyjCWntUoJZtFF
        status: active
        display_name: 王潤
        merged_into_person_id: null
  children:
    - claim:
        id: c_Ulq7pNxxrJRC6OCdUVCA_q
        subject_person_id: p_XfMqsim2Q2nawMwLbryQH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bq7C4AE9wX2HtYoiZvKkhT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aN1v-Tk_z61B3XTYoliYEs
          claim_id: c_Ulq7pNxxrJRC6OCdUVCA_q
          source_id: s_Bw7zDBFLfvTRAwxWiXuZ7M
          stance: supports
          locator: CBDB 双向互证（父 王履 ⇄ 子 王蕃）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Bw7zDBFLfvTRAwxWiXuZ7M
            source_type: api_record
            title: 中国历代人物传记资料库：王蕃（CBDB 21952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21952&o=json
            external_identifier: CBDB:21952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bq7C4AE9wX2HtYoiZvKkhT
        status: active
        display_name: 王蕃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履 | accepted |
| bio.summary | 王履，宋人物。籍贯開封，入仕進士。（中国历代人物传记资料库 CBDB 21951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W44g431hpyjCWntUoJZtFF | 王潤 | accepted |
| children | p_bq7C4AE9wX2HtYoiZvKkhT | 王蕃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕃（CBDB 21952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21952&o=json)
- [中国历代人物传记资料库：王履（CBDB 21951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21951&o=json)
- [中国历代人物传记资料库：王潤（CBDB 21950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21950&o=json)
