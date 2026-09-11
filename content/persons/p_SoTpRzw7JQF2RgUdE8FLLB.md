---
schema: wang-person/v1
id: p_SoTpRzw7JQF2RgUdE8FLLB
status: active
merged_into: null
display_name: 王凱
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ouQ9JPFu4762X25y9aURfX
        subject_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wXYFPZFD9LH5Lps7BPmUuC
          claim_id: c_ouQ9JPFu4762X25y9aURfX
          source_id: s_nLtbKVQ48eecMHeEWqghU5
          stance: supports
          locator: CBDB:202389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202389）
          source: &a1
            id: s_nLtbKVQ48eecMHeEWqghU5
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 202389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202389&o=json
            external_identifier: CBDB:202389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AcjKtGjiDnmFgYwCnxtpiM
        subject_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1381年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2azBiYq48HsRrzAeFFZ6W6
          claim_id: c_AcjKtGjiDnmFgYwCnxtpiM
          source_id: s_nLtbKVQ48eecMHeEWqghU5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iSeanRKzzWXxEi4XYQLwzK
        subject_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱（生于1381年），明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 202389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qzbbi_ZGbvC_bHuIfr8TuQ
          claim_id: c_iSeanRKzzWXxEi4XYQLwzK
          source_id: s_nLtbKVQ48eecMHeEWqghU5
          stance: supports
          locator: CBDB:202389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lJwTF3HOqEvEgAdfLdMRxz
        subject_person_id: p_SGGdU1LxHBDdFcjKk3iP6L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iB_3EG_aDcwJDHvSFF1id9
          claim_id: c_lJwTF3HOqEvEgAdfLdMRxz
          source_id: s_EMZrwcuRqgHBh9DRGXEzdj
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EMZrwcuRqgHBh9DRGXEzdj
            source_type: api_record
            title: 中国历代人物传记资料库：王升遒（CBDB 287273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287273&o=json
            external_identifier: CBDB:287273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_SGGdU1LxHBDdFcjKk3iP6L
        status: active
        display_name: 王升遒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dJIbUNRBofEMCIZ5lCklhd
        subject_person_id: p_RbJtuGxJPEL4wjTmCNw1zD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UHRuujXYWNv_m9Ho5GbR8j
          claim_id: c_dJIbUNRBofEMCIZ5lCklhd
          source_id: s_rbAxR2ctF7MdcWRh9NJy2n
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rbAxR2ctF7MdcWRh9NJy2n
            source_type: api_record
            title: 中国历代人物传记资料库：王義方（CBDB 287271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287271&o=json
            external_identifier: CBDB:287271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RbJtuGxJPEL4wjTmCNw1zD
        status: active
        display_name: 王義方
        merged_into_person_id: null
    - claim:
        id: c_-yyLSycdyI_pFe9IqB25gn
        subject_person_id: p_or9qkt5GvAZ6kK92cAHRPW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENuYw-HU-uUlqPq5x56HqV
          claim_id: c_-yyLSycdyI_pFe9IqB25gn
          source_id: s_BFd1P8nFiGUBgEC6WTNf7Y
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BFd1P8nFiGUBgEC6WTNf7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王伯名（CBDB 287272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287272&o=json
            external_identifier: CBDB:287272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_or9qkt5GvAZ6kK92cAHRPW
        status: active
        display_name: 王伯名
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| birth.date | 1381年 | accepted |
| bio.summary | 王凱（生于1381年），明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 202389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SGGdU1LxHBDdFcjKk3iP6L | 王升遒 | accepted |
| ancestors | p_RbJtuGxJPEL4wjTmCNw1zD | 王義方 | accepted |
| ancestors | p_or9qkt5GvAZ6kK92cAHRPW | 王伯名 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯名（CBDB 287272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287272&o=json)
- [中国历代人物传记资料库：王凱（CBDB 202389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202389&o=json)
- [中国历代人物传记资料库：王升遒（CBDB 287273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287273&o=json)
- [中国历代人物传记资料库：王義方（CBDB 287271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287271&o=json)
