---
schema: wang-person/v1
id: p_i98FVCHxFpmHEPq1xWByi6
status: active
merged_into: null
display_name: 王良臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vDxTzD8AjkKJM6b1V6GvdB
        subject_person_id: p_i98FVCHxFpmHEPq1xWByi6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4ed8BtMEsAMT8iq47m9Pc
          claim_id: c_vDxTzD8AjkKJM6b1V6GvdB
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: CBDB:126528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126528）
          source: &a1
            id: s_fB4hQ2GqSMVbEJrJj9XLEB
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 126528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json
            external_identifier: CBDB:126528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9p545DMpzzGBH3FBMANpc
        subject_person_id: p_i98FVCHxFpmHEPq1xWByi6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣，明人物。明清進士進士，籍贯陳州，入仕進士，曾任道監察御史、監察御史、右布政使。（中国历代人物传记资料库 CBDB 126528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qo58JWIxoD-PApC8CvQDMS
          claim_id: c_x9p545DMpzzGBH3FBMANpc
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: CBDB:126528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ycIrIteIqLesXDwOdjIXf6
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zAV4tS12RNGtf29xCYczBX
          claim_id: c_ycIrIteIqLesXDwOdjIXf6
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LzCu3N2C5U3pdrCETHd45i
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CVJt-BWof6IHDS8dxddZx-
        subject_person_id: p_i98FVCHxFpmHEPq1xWByi6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MzG6HBhmnCMTMciDPjS572
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4efodHoZ_fDssVg5FNaQT
          claim_id: c_CVJt-BWof6IHDS8dxddZx-
          source_id: s_5uL4pl1DJuCBf12lDs-I4O
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5uL4pl1DJuCBf12lDs-I4O
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王良臣妻)（CBDB 266079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266079&o=json
            external_identifier: CBDB:266079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MzG6HBhmnCMTMciDPjS572
        status: active
        display_name: 盧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RhA1WJNIw_zAGVPJJXpSGS
        subject_person_id: p_sxWZMB8G8bGUhAF5mHfW2L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKFEMleRSGglJZ_G0qCX1T
          claim_id: c_RhA1WJNIw_zAGVPJJXpSGS
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sxWZMB8G8bGUhAF5mHfW2L
        status: active
        display_name: 王弘義
        merged_into_person_id: null
    - claim:
        id: c_WYK4w1oo02UdfkX7vV4Lld
        subject_person_id: p_u4PoSDBUf9GkEs759g162p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhXOauU43mI0y85cjSEKmq
          claim_id: c_WYK4w1oo02UdfkX7vV4Lld
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_u4PoSDBUf9GkEs759g162p
        status: active
        display_name: 王哲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| bio.summary | 王良臣，明人物。明清進士進士，籍贯陳州，入仕進士，曾任道監察御史、監察御史、右布政使。（中国历代人物传记资料库 CBDB 126528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LzCu3N2C5U3pdrCETHd45i | 王璋 | accepted |
| spouses | p_MzG6HBhmnCMTMciDPjS572 | 盧氏 | accepted |
| ancestors | p_sxWZMB8G8bGUhAF5mHfW2L | 王弘義 | accepted |
| ancestors | p_u4PoSDBUf9GkEs759g162p | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王良臣妻)（CBDB 266079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266079&o=json)
- [中国历代人物传记资料库：王良臣（CBDB 126528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json)
