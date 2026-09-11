---
schema: wang-person/v1
id: p_qM3x6kx3VpqHy4njLErPrG
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TpDLq3HiuVxAPyxn1RDCGA
        subject_person_id: p_qM3x6kx3VpqHy4njLErPrG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dmo1aAcS6JqkP9WZ5W8TUQ
          claim_id: c_TpDLq3HiuVxAPyxn1RDCGA
          source_id: s_qdSJYhUs8Jm4Xt2A1Kqrgv
          stance: supports
          locator: CBDB:12848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12848）
          source: &a1
            id: s_qdSJYhUs8Jm4Xt2A1Kqrgv
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 12848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12848&o=json
            external_identifier: CBDB:12848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efLS1JyM6hc1KKR6YjuttV
        subject_person_id: p_qM3x6kx3VpqHy4njLErPrG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，宋人物。籍贯咸平，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AIuwe0KF0PVWd7swrq5sJW
          claim_id: c_efLS1JyM6hc1KKR6YjuttV
          source_id: s_qdSJYhUs8Jm4Xt2A1Kqrgv
          stance: supports
          locator: CBDB:12848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lzY4uaSesvfhYcBYbxLNt4
        subject_person_id: p_FS8HK4Z3328XC2nft9x4o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qM3x6kx3VpqHy4njLErPrG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HuAyyrqjvREJB_Hd2v6EUw
          claim_id: c_lzY4uaSesvfhYcBYbxLNt4
          source_id: s_xZN1gmHYm3F16conuSkE6c
          stance: supports
          locator: CBDB 双向互证（子 王祚 ⇄ 父 王丕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_xZN1gmHYm3F16conuSkE6c
            source_type: api_record
            title: 中国历代人物传记资料库：王丕（CBDB 12847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12847&o=json
            external_identifier: CBDB:12847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FS8HK4Z3328XC2nft9x4o3
        status: active
        display_name: 王丕
        merged_into_person_id: null
  children:
    - claim:
        id: c_vKLBG1OQ8g_clq79CC9LY3
        subject_person_id: p_qM3x6kx3VpqHy4njLErPrG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLFS24n_K2cqECCih1RQw5
          claim_id: c_vKLBG1OQ8g_clq79CC9LY3
          source_id: s_ox3YuM7rRdDy4B32NZ91t3
          stance: supports
          locator: CBDB 双向互证（父 王祚 ⇄ 子 王銳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ox3YuM7rRdDy4B32NZ91t3
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 12849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12849&o=json
            external_identifier: CBDB:12849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NuT9NrbF95GBrUJnPKKH1H
        status: active
        display_name: 王銳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，宋人物。籍贯咸平，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FS8HK4Z3328XC2nft9x4o3 | 王丕 | accepted |
| children | p_NuT9NrbF95GBrUJnPKKH1H | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丕（CBDB 12847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12847&o=json)
- [中国历代人物传记资料库：王銳（CBDB 12849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12849&o=json)
- [中国历代人物传记资料库：王祚（CBDB 12848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12848&o=json)
