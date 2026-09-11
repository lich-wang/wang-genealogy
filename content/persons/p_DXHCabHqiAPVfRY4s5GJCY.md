---
schema: wang-person/v1
id: p_DXHCabHqiAPVfRY4s5GJCY
status: active
merged_into: null
display_name: 王敬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AM54sGWG7MFwWdGbfALBzq
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dez2sajDzeKg87QnShS4Ce
          claim_id: c_AM54sGWG7MFwWdGbfALBzq
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: CBDB:142720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142720）
          source: &a1
            id: s_MmehzZX93GxJjEo1vWTkDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 142720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json
            external_identifier: CBDB:142720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c1T5VNtri2ViZ2tYsji81p
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCNP81xvX9xJLEyVXqwC83
          claim_id: c_c1T5VNtri2ViZ2tYsji81p
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
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
        id: c_zKBHGXcuNAhXGNStmVnppU
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 638年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHad9Nvn5MQ6AvpJT18Nn4
          claim_id: c_zKBHGXcuNAhXGNStmVnppU
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
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
        id: c_6VHPu9cbSeoHnUTaLsi5DN
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬（599年—638年），史料所见人物。本项目依据《中国历代人物传记资料库：王敬（CBDB 142720）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rv59sMl7X3gvi3E8G2UGxK
          claim_id: c_6VHPu9cbSeoHnUTaLsi5DN
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: CBDB:142720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ssJt_E_VfndOIf1Y8oAgqe
        subject_person_id: p_RhB5HQ32Fj1Dq1FEySG5dM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xdqhyj-zJ34EOGBJKDw2tJ
          claim_id: c_ssJt_E_VfndOIf1Y8oAgqe
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhB5HQ32Fj1Dq1FEySG5dM
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_56CFvv811cx9IGx3SbeFxk
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_y59rBAGTTAoLpxwuumwATQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y7DjAmXAJpY6xJQRcgoYD4
          claim_id: c_56CFvv811cx9IGx3SbeFxk
          source_id: s_KGKKD0fTGv8SZJ2VSp8Te1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KGKKD0fTGv8SZJ2VSp8Te1
            source_type: api_record
            title: 中国历代人物传记资料库：閻氏(王敬妻)（CBDB 162877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162877&o=json
            external_identifier: CBDB:162877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_y59rBAGTTAoLpxwuumwATQ
        status: active
        display_name: 閻氏
        merged_into_person_id: null
    - claim:
        id: c_85jxunX9S_Yy3EGYozvGpE
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YhDAa9tzbnb8jiFeKpLNhg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwRbun85wugH8v22kLItLi
          claim_id: c_85jxunX9S_Yy3EGYozvGpE
          source_id: s_YxjV24jJnLD77clITvMUSc
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YxjV24jJnLD77clITvMUSc
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王敬妻)（CBDB 162878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162878&o=json
            external_identifier: CBDB:162878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YhDAa9tzbnb8jiFeKpLNhg
        status: active
        display_name: 郭氏
        merged_into_person_id: null
    - claim:
        id: c_MYCm83NLa1DA508o-UoOW8
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zyXwwgy46r8C5YhZP4K9JK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUUuKA1YThGFfoVv3O-8SG
          claim_id: c_MYCm83NLa1DA508o-UoOW8
          source_id: s_Wk2_aHmVpDK2wVB2qnPPVR
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wk2_aHmVpDK2wVB2qnPPVR
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162879&o=json
            external_identifier: CBDB:162879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zyXwwgy46r8C5YhZP4K9JK
        status: active
        display_name: 宋氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| birth.date | 599年 | accepted |
| death.date | 638年 | accepted |
| bio.summary | 王敬（599年—638年），史料所见人物。本项目依据《中国历代人物传记资料库：王敬（CBDB 142720）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhB5HQ32Fj1Dq1FEySG5dM | 王貴 | accepted |
| spouses | p_y59rBAGTTAoLpxwuumwATQ | 閻氏 | accepted |
| spouses | p_YhDAa9tzbnb8jiFeKpLNhg | 郭氏 | accepted |
| spouses | p_zyXwwgy46r8C5YhZP4K9JK | 宋氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王敬妻)（CBDB 162878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162878&o=json)
- [中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162879&o=json)
- [中国历代人物传记资料库：王敬（CBDB 142720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json)
- [中国历代人物传记资料库：閻氏(王敬妻)（CBDB 162877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162877&o=json)
