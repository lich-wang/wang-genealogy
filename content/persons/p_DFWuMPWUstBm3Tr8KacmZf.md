---
schema: wang-person/v1
id: p_DFWuMPWUstBm3Tr8KacmZf
status: active
merged_into: null
display_name: 王嗣宗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FWjUWizLu6vYFx3a2ptvH2
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Vq7ZLF3h7Wmo77DrXYw1S
          claim_id: c_FWjUWizLu6vYFx3a2ptvH2
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB:1880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1880）
          source: &a1
            id: s_42M1RyqHPGFYMpZ9FeVqji
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 1880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json
            external_identifier: CBDB:1880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MbZE3uKWEcK1ZyqTeR3sgv
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 944年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNWaMcUQqrW2XFjzvShtaQ
          claim_id: c_MbZE3uKWEcK1ZyqTeR3sgv
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
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
        id: c_LD5SkiaPxeQUPCTnLvXaiq
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1021年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wmq3VP2VrDcqKRTv1TT1Ec
          claim_id: c_LD5SkiaPxeQUPCTnLvXaiq
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
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
        id: c_5hfbXuXG8KnFoDN4NtqDBQ
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗（944年—1021年），宋人物。籍贯西河，入仕進士，曾任同知樞密院事、節度使、太師。（中国历代人物传记资料库 CBDB 1880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fSAc57gkUIa70mXYrOIdS-
          claim_id: c_5hfbXuXG8KnFoDN4NtqDBQ
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB:1880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vaqHPrYHgZJEAQ2Q2P5qch
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKjzAjESpzujI2bloi4GTM
          claim_id: c_vaqHPrYHgZJEAQ2Q2P5qch
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB 双向互证（父 王夢證 ⇄ 子 王嗣宗）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_FXHwcoHY4AFBFWRSSNw52j
        status: active
        display_name: 王夢證
        merged_into_person_id: null
  children:
    - claim:
        id: c_KSZmNFEtNKq94A082GbZ8Y
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZxM73hSp11NXLR4Pp1Gsy9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFxhnUDYEmsvd2MvLKFAZY
          claim_id: c_KSZmNFEtNKq94A082GbZ8Y
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB 双向互证（子 王堯臣 ⇄ 父 王嗣宗）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ZxM73hSp11NXLR4Pp1Gsy9
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
    - claim:
        id: c_cF655qqmGnI-h3Ql1R0Dag
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EFHu2f75P5hv7hu9BKehC4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucFCVBQqloQ2v_10QIUgRj
          claim_id: c_cF655qqmGnI-h3Ql1R0Dag
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB 双向互证（子 王唐臣 ⇄ 父 王嗣宗）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EFHu2f75P5hv7hu9BKehC4
        status: active
        display_name: 王唐臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jxL44uJTwCcDe2S_Pr9UGI
        subject_person_id: p_GsMLftW55iaStQ68Ab6yJ2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOsWZjTsbGqAjpUHO5PlSk
          claim_id: c_jxL44uJTwCcDe2S_Pr9UGI
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: 宋史：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GsMLftW55iaStQ68Ab6yJ2
        status: active
        display_name: 王同節
        merged_into_person_id: null
    - claim:
        id: c_usoTQE1xQWeRYIjeNpIty-
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUIEDtmZvN1xmRou6_iNx3
          claim_id: c_usoTQE1xQWeRYIjeNpIty-
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        status: active
        display_name: 王待價
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嗣宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣宗 | accepted |
| birth.date | 944年 | accepted |
| death.date | 1021年 | accepted |
| bio.summary | 王嗣宗（944年—1021年），宋人物。籍贯西河，入仕進士，曾任同知樞密院事、節度使、太師。（中国历代人物传记资料库 CBDB 1880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FXHwcoHY4AFBFWRSSNw52j | 王夢證 | accepted |
| children | p_ZxM73hSp11NXLR4Pp1Gsy9 | 王堯臣 | accepted |
| children | p_EFHu2f75P5hv7hu9BKehC4 | 王唐臣 | accepted |
| ancestors | p_GsMLftW55iaStQ68Ab6yJ2 | 王同節 | accepted |
| ancestors | p_Hi2pMZGHcEwS8ZkC4zPUSd | 王待價 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 1880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json)
