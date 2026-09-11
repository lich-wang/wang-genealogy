---
schema: wang-person/v1
id: p_18GnPkpUEcGNgbFCDg5gah
status: active
merged_into: null
display_name: 王任用
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JhTu7KixUdZGm5dGH3oSoG
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBF1HQBFohB3Ag5ave1f7H
          claim_id: c_JhTu7KixUdZGm5dGH3oSoG
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: CBDB:203867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203867）
          source: &a1
            id: s_ZeEXZ4gqmGctbEfXb8vPv6
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 203867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json
            external_identifier: CBDB:203867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fFPD2FZYQoJu7NUgsvbbNd
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1KabQU1nfTY4fr8fAGjhXD
          claim_id: c_fFPD2FZYQoJu7NUgsvbbNd
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
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
        id: c_VdAcyAewk746y95u8szGUM
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任用（生于1501年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 203867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1wa-yMLzgdaPVN8xvaqA4u
          claim_id: c_VdAcyAewk746y95u8szGUM
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: CBDB:203867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_amIRleQceg_1YUg4gzNSMR
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxMzuSqxs59L9m8riCjY5R
          claim_id: c_amIRleQceg_1YUg4gzNSMR
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvzpEJfQqQbdZFgH5SKxcJ
        status: active
        display_name: 王時雨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yvTy9gJD776bN4qQI5i_84
        subject_person_id: p_QfJB6kHdWiEPHQYHnuHvBt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpeLnTW7Ul4nRaodw2JXFF
          claim_id: c_yvTy9gJD776bN4qQI5i_84
          source_id: s_-aD0YnfCFu7PYsa-lAGE2k
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：丈夫
          quotation: null
          interpretation_note: null
          source:
            id: s_-aD0YnfCFu7PYsa-lAGE2k
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王任用妻)（CBDB 311209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311209&o=json
            external_identifier: CBDB:311209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QfJB6kHdWiEPHQYHnuHvBt
        status: active
        display_name: 錢氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_1uFS9XDnGDNw4OzbIdFbn9
        subject_person_id: p_hsrd5jGJNsGh8XhCPGY3RN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y9P4WBdPS-XPEeimx2KAPe
          claim_id: c_1uFS9XDnGDNw4OzbIdFbn9
          source_id: s_mLDAiBAt3iu2BUkQygLUpA
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mLDAiBAt3iu2BUkQygLUpA
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 311204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311204&o=json
            external_identifier: CBDB:311204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hsrd5jGJNsGh8XhCPGY3RN
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_ydGID8fkxWSOCwP5YINyht
        subject_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flsEDLsy12u-LWqX2DZp_i
          claim_id: c_ydGID8fkxWSOCwP5YINyht
          source_id: s_tFzDULdCMkmeKGi2oTM7eH
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tFzDULdCMkmeKGi2oTM7eH
            source_type: api_record
            title: 中国历代人物传记资料库：王恢（CBDB 311205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311205&o=json
            external_identifier: CBDB:311205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        status: active
        display_name: 王恢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王任用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任用 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | 王任用（生于1501年），明人物。明清進士進士，籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 203867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvzpEJfQqQbdZFgH5SKxcJ | 王時雨 | accepted |
| spouses | p_QfJB6kHdWiEPHQYHnuHvBt | 錢氏 | accepted |
| ancestors | p_hsrd5jGJNsGh8XhCPGY3RN | 王訓 | accepted |
| ancestors | p_o3rUP2kQ1XZ8uF6hpE5TbV | 王恢 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王任用妻)（CBDB 311209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311209&o=json)
- [中国历代人物传记资料库：王恢（CBDB 311205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311205&o=json)
- [中国历代人物传记资料库：王任用（CBDB 203867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json)
- [中国历代人物传记资料库：王訓（CBDB 311204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311204&o=json)
