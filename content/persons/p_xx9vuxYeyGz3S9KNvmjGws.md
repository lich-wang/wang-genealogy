---
schema: wang-person/v1
id: p_xx9vuxYeyGz3S9KNvmjGws
status: active
merged_into: null
display_name: 王雱
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6YQZLVgPDvdXT85iVnwdrq
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JJFiC837wRNY7eRmMMs8U
          claim_id: c_6YQZLVgPDvdXT85iVnwdrq
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: CBDB:3968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3968）
          source: &a1
            id: s_VNMo7fxsmxMDXyJHepPdy7
            source_type: api_record
            title: 中国历代人物传记资料库：王雱（CBDB 3968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json
            external_identifier: CBDB:3968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u4Rw45NHTrpXDYdoamhvzy
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6pgAGpCH2oaPeFbkMp24k
          claim_id: c_u4Rw45NHTrpXDYdoamhvzy
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XcsnuTGMWfTqogPaJFzo15
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1076年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zs923FJSY7wi8QyF9CmzA
          claim_id: c_XcsnuTGMWfTqogPaJFzo15
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eA79WKW7uAVtVFRTKLFEY
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雱（1044年—1076年），宋人物。籍贯臨川，身份为思想家，入仕進士，曾任待制、天章閣待制、左諫議大夫。（中国历代人物传记资料库 CBDB 3968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LFOWVvY6Br1S8CPlcYKpdK
          claim_id: c_4eA79WKW7uAVtVFRTKLFEY
          source_id: s_VNMo7fxsmxMDXyJHepPdy7
          stance: supports
          locator: CBDB:3968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oOrBfi43cDmd7Gr5hDy-JC
        subject_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GibLDct9VPz_XCp0zVthnA
          claim_id: c_oOrBfi43cDmd7Gr5hDy-JC
          source_id: s_RbaW1YdkRtPWeAGfeiozBb
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RbaW1YdkRtPWeAGfeiozBb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（38653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38653&o=json
            external_identifier: CBDB:38653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:29.644Z
            metadata_json: null
      object_person:
        id: p_4xrT4auYPhfo7nPM4qHRLt
        status: active
        display_name: 吴氏
        merged_into_person_id: null
    - claim:
        id: c_RhZ1eTgEVHYqQeGwbzDMMG
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWhZUN8LmcYqy9KP1-zddY
          claim_id: c_RhZ1eTgEVHYqQeGwbzDMMG
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，954：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
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
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  children:
    - claim:
        id: c_JrOVPhUbBQsz6CUD4sTSNA
        subject_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u4eFkZcAi2Wj3khZrTyMM4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bD0i8-Xt1YXb6LRXcYhbAJ
          claim_id: c_JrOVPhUbBQsz6CUD4sTSNA
          source_id: s_hyn3RBownq9NTiG26mHH8p
          stance: supports
          locator: CBDB 双向互证（父 王雱 ⇄ 子 王棣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_hyn3RBownq9NTiG26mHH8p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棣（22210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22210&o=json
            external_identifier: CBDB:22210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:22.578Z
            metadata_json: null
      object_person:
        id: p_u4eFkZcAi2Wj3khZrTyMM4
        status: active
        display_name: 王棣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雱 | accepted |
| birth.date | 1044年 | accepted |
| death.date | 1076年 | accepted |
| bio.summary | 王雱（1044年—1076年），宋人物。籍贯臨川，身份为思想家，入仕進士，曾任待制、天章閣待制、左諫議大夫。（中国历代人物传记资料库 CBDB 3968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4xrT4auYPhfo7nPM4qHRLt | 吴氏 | accepted |
| parents | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| children | p_u4eFkZcAi2Wj3khZrTyMM4 | 王棣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雱（CBDB 3968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王棣（22210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22210&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（38653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38653&o=json)
