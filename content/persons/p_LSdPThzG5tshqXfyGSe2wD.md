---
schema: wang-person/v1
id: p_LSdPThzG5tshqXfyGSe2wD
status: active
merged_into: null
display_name: 王滂
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obWstRy4dSmPhkwsMssTLf
        subject_person_id: p_LSdPThzG5tshqXfyGSe2wD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滂，史料所见人物。本项目依据《維基數據：王滂》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_sdIqK1yvaa6UC3o2-6vCr8
          claim_id: c_obWstRy4dSmPhkwsMssTLf
          source_id: s_RbUEShUjFKPZpokBjxPA8y
          stance: supports
          locator: Q45401605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RbUEShUjFKPZpokBjxPA8y
            source_type: api_record
            title: 維基數據：王滂（Q45401605）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401605
            external_identifier: Q45401605
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:59.912Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PZAmtwkB1kteXYmJj7DSFi
        subject_person_id: p_LSdPThzG5tshqXfyGSe2wD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_r9ynD5XPvtudGN3d59EXUq
          claim_id: c_PZAmtwkB1kteXYmJj7DSFi
          source_id: s_RbUEShUjFKPZpokBjxPA8y
          stance: supports
          locator: Q45401605
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4HoqomYaaX7s5YPpmfiuPT
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSdPThzG5tshqXfyGSe2wD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FQQ9gMS6PXeETUjXU6Sj6F
          claim_id: c_4HoqomYaaX7s5YPpmfiuPT
          source_id: s_fLAce8PGeb2eAaVFYTSBka
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fLAce8PGeb2eAaVFYTSBka
            source_type: api_record
            title: 維基數據：王安石（Q319618）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q319618
            external_identifier: Q319618
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:55.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
        - id: cs_4CVAETmQTfWbtsTCbqfR3E
          claim_id: c_4HoqomYaaX7s5YPpmfiuPT
          source_id: s_RbUEShUjFKPZpokBjxPA8y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RbUEShUjFKPZpokBjxPA8y
            source_type: api_record
            title: 維基數據：王滂（Q45401605）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401605
            external_identifier: Q45401605
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:59.912Z
            metadata_json: null
        - id: cs_fFGb5K7765nZkfD7fFbuGV
          claim_id: c_4HoqomYaaX7s5YPpmfiuPT
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_wTmW7P46rC9NKuytUYZS1Z
          claim_id: c_4HoqomYaaX7s5YPpmfiuPT
          source_id: s_ZFrTH5LnJhapBoosuYtaid
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZFrTH5LnJhapBoosuYtaid
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王滂（21968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json
            external_identifier: CBDB:21968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:21.359Z
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  children:
    - claim:
        id: c_sFR8gn6qcD7MQ9yXLzrc8q
        subject_person_id: p_LSdPThzG5tshqXfyGSe2wD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wJa89oWwAQ916LvofuGWAh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CvcZxFUhqTA5CAxB1Mp4tH
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_RbUEShUjFKPZpokBjxPA8y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RbUEShUjFKPZpokBjxPA8y
            source_type: api_record
            title: 維基數據：王滂（Q45401605）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401605
            external_identifier: Q45401605
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:59.912Z
            metadata_json: null
        - id: cs_NMbEoq2TbDFsc3MGuVPRgd
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_ZFrTH5LnJhapBoosuYtaid
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZFrTH5LnJhapBoosuYtaid
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王滂（21968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json
            external_identifier: CBDB:21968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:21.359Z
            metadata_json: null
        - id: cs_hDvC5Y4e8j1z9SokRf2def
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_tGLvV5YgqKR7aDjAPfxb6m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tGLvV5YgqKR7aDjAPfxb6m
            source_type: api_record
            title: 维基数据：王桐（Q45401607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401607
            external_identifier: Q45401607
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:21.380Z
            metadata_json: null
        - id: cs_av3poJYsTcpA9356fZAnTt
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_1uru69BA1H1mJty4vCCNAm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王桐（21969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json
            external_identifier: CBDB:21969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:21.512Z
            metadata_json: null
      object_person:
        id: p_wJa89oWwAQ916LvofuGWAh
        status: active
        display_name: 王桐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王滂，史料所见人物。本项目依据《維基數據：王滂》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王滂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| children | p_wJa89oWwAQ916LvofuGWAh | 王桐 | accepted |

## 外部来源

- [维基数据：王桐（Q45401607）](https://www.wikidata.org/wiki/Q45401607)
- [維基數據：王安石（Q319618）](https://www.wikidata.org/wiki/Q319618)
- [維基數據：王滂（Q45401605）](https://www.wikidata.org/wiki/Q45401605)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王滂（21968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json)
- [CBDB 中国历代人物传记资料库：王桐（21969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json)
