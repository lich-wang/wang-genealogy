---
schema: wang-person/v1
id: p_ZXCCHyWq79tSCS7LRL4gmZ
status: active
merged_into: null
display_name: 王爟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_in49pn3EHhAuV4oYo53o6A
        subject_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nc4FYcLgCLZuySZAAkvYMc
          claim_id: c_in49pn3EHhAuV4oYo53o6A
          source_id: s_fz4LbdjAN7XWQ7spAZq8As
          stance: supports
          locator: CBDB:249899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249899）
          source: &a1
            id: s_fz4LbdjAN7XWQ7spAZq8As
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 249899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json
            external_identifier: CBDB:249899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sfu7E5bCZ3Yv6UcHbD1LNG
        subject_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GAAvliNbRpHPDesmCTY6KF
          claim_id: c_Sfu7E5bCZ3Yv6UcHbD1LNG
          source_id: s_fz4LbdjAN7XWQ7spAZq8As
          stance: supports
          locator: CBDB:249899
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jS1W1LUtNb2bFDACtdLWx-
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7tBI2VLajyUUta-OgGnd8
          claim_id: c_jS1W1LUtNb2bFDACtdLWx-
          source_id: s_sgToZ_T6zS7B3yeomyIoGX
          stance: supports
          locator: CBDB：兄弟 王弼（126707）之父／母 王秬
          quotation: null
          interpretation_note: 由兄弟关系推断：王爟 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王爟 之父／母。
          source:
            id: s_sgToZ_T6zS7B3yeomyIoGX
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 249899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json
            external_identifier: CBDB:249899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FYj3Ea7MLmAqyMy1S17vQe
        status: active
        display_name: 王秬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9vLEfmiddn1MgqjkQ1gGxv
        subject_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_d2dNE2KPJApVMV192KKz46
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wEfoErK5Vkyhue75ivlu6T
          claim_id: c_9vLEfmiddn1MgqjkQ1gGxv
          source_id: s_sgToZ_T6zS7B3yeomyIoGX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126707 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sgToZ_T6zS7B3yeomyIoGX
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 249899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json
            external_identifier: CBDB:249899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d2dNE2KPJApVMV192KKz46
        status: active
        display_name: 王弼
        merged_into_person_id: null
---

# 王爟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爟 | accepted |
| bio.summary | 王爟，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FYj3Ea7MLmAqyMy1S17vQe | 王秬 | accepted |
| other | p_d2dNE2KPJApVMV192KKz46 | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爟（CBDB 249899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json)
