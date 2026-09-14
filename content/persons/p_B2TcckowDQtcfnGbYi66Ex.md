---
schema: wang-person/v1
id: p_B2TcckowDQtcfnGbYi66Ex
status: active
merged_into: null
display_name: 王延善
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_huLFLwY3UBxmK9gxwLethC
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SWh5zNYwb2HCusz1D183Jm
          claim_id: c_huLFLwY3UBxmK9gxwLethC
          source_id: s_ohNxNmrH4t1JfJwMZyH3kY
          stance: supports
          locator: CBDB:526970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526970）
          source: &a1
            id: s_ohNxNmrH4t1JfJwMZyH3kY
            source_type: api_record
            title: 中国历代人物传记资料库：王延善（CBDB 526970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526970&o=json
            external_identifier: CBDB:526970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d4Rt7NcHEoKUk8VmtPBRYg
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延善，史料所见人物。本项目依据《中国历代人物传记资料库：王延善（CBDB 526970）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SU6d5gdOP2J-FPBE_VAsNU
          claim_id: c_d4Rt7NcHEoKUk8VmtPBRYg
          source_id: s_ohNxNmrH4t1JfJwMZyH3kY
          stance: supports
          locator: CBDB:526970
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hm3ZZFSLAunzab6lSRnoRJ
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2TkqAvb3gC2J9torN4HMvi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ccf8LqLpseCBX9Xz70DpZd
          claim_id: c_hm3ZZFSLAunzab6lSRnoRJ
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13154：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2kNj51mFEsiBAYBCRH14Nz
            source_type: api_record
            title: 中国历代人物传记资料库：王餘佑（CBDB 69444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json
            external_identifier: CBDB:69444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2TkqAvb3gC2J9torN4HMvi
        status: active
        display_name: 王餘佑
        merged_into_person_id: null
    - claim:
        id: c_2Z8BCi11YYsHQNrnPrj9TJ
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1bt9A48WPN5iyDMj12mMZc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwJ2rC1wWZEWNrXt33RfY5
          claim_id: c_2Z8BCi11YYsHQNrnPrj9TJ
          source_id: s_s-GgjeLnVXxw7RKARCAm8R
          stance: supports
          locator: CBDB：兄弟 王餘佑（69444）之父／母 王延善
          quotation: null
          interpretation_note: 由兄弟关系推断：王餘恪 与 王餘佑 为同胞（CBDB 记「弟」），王餘佑 之父／母即 王餘恪 之父／母。
          source:
            id: s_s-GgjeLnVXxw7RKARCAm8R
            source_type: api_record
            title: 中国历代人物传记资料库：王餘恪（CBDB 526972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526972&o=json
            external_identifier: CBDB:526972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1bt9A48WPN5iyDMj12mMZc
        status: active
        display_name: 王餘恪
        merged_into_person_id: null
    - claim:
        id: c_XzPqfkV888ReRORPHP5chv
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zUd5JQtsvmEP1aiwEfVZ5E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kWNyS_x69zkkjf3NuSPWjA
          claim_id: c_XzPqfkV888ReRORPHP5chv
          source_id: s_LcXyYpDqAP9RSPReTA576Z
          stance: supports
          locator: CBDB：兄弟 王餘佑（69444）之父／母 王延善
          quotation: null
          interpretation_note: 由兄弟关系推断：王餘嚴 与 王餘佑 为同胞（CBDB 记「兄」），王餘佑 之父／母即 王餘嚴 之父／母。
          source:
            id: s_LcXyYpDqAP9RSPReTA576Z
            source_type: api_record
            title: 中国历代人物传记资料库：王餘嚴（CBDB 526974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526974&o=json
            external_identifier: CBDB:526974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zUd5JQtsvmEP1aiwEfVZ5E
        status: active
        display_name: 王餘嚴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延善 | accepted |
| bio.summary | 王延善，史料所见人物。本项目依据《中国历代人物传记资料库：王延善（CBDB 526970）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2TkqAvb3gC2J9torN4HMvi | 王餘佑 | accepted |
| children | p_1bt9A48WPN5iyDMj12mMZc | 王餘恪 | accepted |
| children | p_zUd5JQtsvmEP1aiwEfVZ5E | 王餘嚴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延善（CBDB 526970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526970&o=json)
- [中国历代人物传记资料库：王餘恪（CBDB 526972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526972&o=json)
- [中国历代人物传记资料库：王餘嚴（CBDB 526974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526974&o=json)
- [中国历代人物传记资料库：王餘佑（CBDB 69444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json)
