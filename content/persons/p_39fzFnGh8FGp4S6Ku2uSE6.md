---
schema: wang-person/v1
id: p_39fzFnGh8FGp4S6Ku2uSE6
status: active
merged_into: null
display_name: 王潣
cbdb_id: 276558
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5muEiU4tSCf6R5xoBE9H5
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潣，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0DLAkHeLGGrYbxQDQB3Fsu
          claim_id: c_Q5muEiU4tSCf6R5xoBE9H5
          source_id: s_9PD54p4stijxXvHv5LyEPH
          stance: supports
          locator: CBDB:276558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9PD54p4stijxXvHv5LyEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王潣（CBDB 276558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276558&o=json
            external_identifier: CBDB:276558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFVznxVTU65cwMb7hDWzix
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wdPSnQB5nA1ZU3kDGZoPqW
          claim_id: c_JFVznxVTU65cwMb7hDWzix
          source_id: s_9PD54p4stijxXvHv5LyEPH
          stance: supports
          locator: CBDB:276558
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ymzzasFyzVfuab3ybBXqHP
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WA8J2WDe58Pe5liOvS8_s1
          claim_id: c_ymzzasFyzVfuab3ybBXqHP
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzgtJjtpFDj5d79TQgELye
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 126900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json
            external_identifier: CBDB:126900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f8i9p9JzFPTMv3CWRTDLAz
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_-xvvzzuy5wYcHFTHBNLpRG
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cfc62p6vvVA2LH7CqS9MKG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VcpV7UM28tFZz7H1tO4a62
          claim_id: c_-xvvzzuy5wYcHFTHBNLpRG
          source_id: s_-D5fZ7HgvniMT1_Qk-oP5e
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王金 与 王鑾 为同胞（CBDB 记「兄」），王鑾 之父／母即 王金 之父／母。
          source:
            id: s_-D5fZ7HgvniMT1_Qk-oP5e
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 276565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276565&o=json
            external_identifier: CBDB:276565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cfc62p6vvVA2LH7CqS9MKG
        status: active
        display_name: 王金
        merged_into_person_id: null
    - claim:
        id: c_cQo-IPxd_PJXg0nU2fGAbH
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqmJJi7DtBeLpaSfs4U5JQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CWtKSe6yx7lCqH5ChmpDlk
          claim_id: c_cQo-IPxd_PJXg0nU2fGAbH
          source_id: s_VqAe_JP-EMLLVCHnHtNoPc
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王鑾 为同胞（CBDB 记「兄」），王鑾 之父／母即 王鐸 之父／母。
          source:
            id: s_VqAe_JP-EMLLVCHnHtNoPc
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 276566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276566&o=json
            external_identifier: CBDB:276566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FqmJJi7DtBeLpaSfs4U5JQ
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_dvbXFkvWucMSzdyzzV7QIG
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gb9QWdFikDvFvpsGPNQQ2c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OoAsgB5RdUWKHBIu5hprQh
          claim_id: c_dvbXFkvWucMSzdyzzV7QIG
          source_id: s_-nQfuioO7j7g0ThKPZOMBw
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王錦 与 王鑾 为同胞（CBDB 记「兄」），王鑾 之父／母即 王錦 之父／母。
          source:
            id: s_-nQfuioO7j7g0ThKPZOMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 276567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json
            external_identifier: CBDB:276567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gb9QWdFikDvFvpsGPNQQ2c
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_TWyOuBZTZcL215COhzO1N_
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6ooQKqckNTBL18LKBeM3a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSyZeyGWEEsIhb-az1mn48
          claim_id: c_TWyOuBZTZcL215COhzO1N_
          source_id: s_YIS6twoben07JGds-X6oC_
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王鑾 为同胞（CBDB 记「弟」），王鑾 之父／母即 王欽 之父／母。
          source:
            id: s_YIS6twoben07JGds-X6oC_
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 276563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json
            external_identifier: CBDB:276563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b6ooQKqckNTBL18LKBeM3a
        status: active
        display_name: 王欽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王潣，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276558） | accepted |
| name.primary | 王潣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_f8i9p9JzFPTMv3CWRTDLAz | 王鑾 | accepted |
| children | p_Cfc62p6vvVA2LH7CqS9MKG | 王金 | accepted |
| children | p_FqmJJi7DtBeLpaSfs4U5JQ | 王鐸 | accepted |
| children | p_Gb9QWdFikDvFvpsGPNQQ2c | 王錦 | accepted |
| children | p_b6ooQKqckNTBL18LKBeM3a | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 276566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276566&o=json)
- [中国历代人物传记资料库：王金（CBDB 276565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276565&o=json)
- [中国历代人物传记资料库：王錦（CBDB 276567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276567&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
- [中国历代人物传记资料库：王潣（CBDB 276558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276558&o=json)
- [中国历代人物传记资料库：王欽（CBDB 276563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json)
