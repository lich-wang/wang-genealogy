---
schema: wang-person/v1
id: p_AQPzHURj5Q55p8A3sruTTG
status: active
merged_into: null
display_name: 王朝相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MyxhAjSQR8BtHq2pRuCrRe
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7oLFMS7GGRmBHY3d51xast
          claim_id: c_MyxhAjSQR8BtHq2pRuCrRe
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: CBDB:202839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202839）
          source: &a1
            id: s_xCtA74fHb4nmCqYULtCsu1
            source_type: api_record
            title: 中国历代人物传记资料库：王朝相（CBDB 202839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json
            external_identifier: CBDB:202839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vqch4JNbe9EyHdemTZE5pE
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgaWEN4STB57P2AjGcJ3rQ
          claim_id: c_vqch4JNbe9EyHdemTZE5pE
          source_id: s_xCtA74fHb4nmCqYULtCsu1
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
        id: c_eeRuk2KtCJREyEa51qvVNj
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝相（生于1503年），明人物。明清進士進士，籍贯永年，入仕進士。（中国历代人物传记资料库 CBDB 202839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NJx7EmLaR7Z6DfxHDLmDq1
          claim_id: c_eeRuk2KtCJREyEa51qvVNj
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: CBDB:202839
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l0CM4JQdEGBy7VcQ7AQCN6
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AQPzHURj5Q55p8A3sruTTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7BOCVZHfMRTbtuIEIDKlGP
          claim_id: c_l0CM4JQdEGBy7VcQ7AQCN6
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AX7eQXpp32FZKNQ3efJdUf
        status: active
        display_name: 王翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__Soafc8l1RruZA6iRYPHTV
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WvhMZ8L3PD791uLh9uBESW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al-vaFPWYJbrFgYivmIop6
          claim_id: c__Soafc8l1RruZA6iRYPHTV
          source_id: s_0mLhwtS7bQcn1l9qcyf6ak
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_0mLhwtS7bQcn1l9qcyf6ak
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王朝相妻)（CBDB 295492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295492&o=json
            external_identifier: CBDB:295492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WvhMZ8L3PD791uLh9uBESW
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_lRRS8CNPpA4bckagdDjSa0
        subject_person_id: p_SKzVRPGQzpq1LBZ6S2MRZE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AQPzHURj5Q55p8A3sruTTG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khqFXqT6IpzSKl8Gs82Q8y
          claim_id: c_lRRS8CNPpA4bckagdDjSa0
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SKzVRPGQzpq1LBZ6S2MRZE
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_azX-mAljlOlND4W2j91fvl
        subject_person_id: p_rCnLLhv3N9isnbTYmAgNYA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AQPzHURj5Q55p8A3sruTTG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_pqZcHP1YLoifpcV2Cd7Y
          claim_id: c_azX-mAljlOlND4W2j91fvl
          source_id: s_xCtA74fHb4nmCqYULtCsu1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rCnLLhv3N9isnbTYmAgNYA
        status: active
        display_name: 王藩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王朝相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝相 | accepted |
| birth.date | 1503年 | accepted |
| bio.summary | 王朝相（生于1503年），明人物。明清進士進士，籍贯永年，入仕進士。（中国历代人物传记资料库 CBDB 202839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AX7eQXpp32FZKNQ3efJdUf | 王翮 | accepted |
| spouses | p_WvhMZ8L3PD791uLh9uBESW | 劉氏 | accepted |
| ancestors | p_SKzVRPGQzpq1LBZ6S2MRZE | 王純 | accepted |
| ancestors | p_rCnLLhv3N9isnbTYmAgNYA | 王藩 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王朝相妻)（CBDB 295492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295492&o=json)
- [中国历代人物传记资料库：王朝相（CBDB 202839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202839&o=json)
