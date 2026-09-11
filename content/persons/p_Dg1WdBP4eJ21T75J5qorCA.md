---
schema: wang-person/v1
id: p_Dg1WdBP4eJ21T75J5qorCA
status: active
merged_into: null
display_name: 陳貞
revision: 1
cbdb_id: 437648
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BCU5QtIyyaWH7vHKhSxYj8
        subject_person_id: p_Dg1WdBP4eJ21T75J5qorCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳貞（1300—1372），元人物。籍贯義烏，身份为好學。（中国历代人物传记资料库 CBDB 437648）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8qrgzrAr0E_3X0NA9dm6mN
          claim_id: c_BCU5QtIyyaWH7vHKhSxYj8
          source_id: s_IFAmbO1xlKyIPra9UHIhTy
          stance: supports
          locator: CBDB:437648
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_IFAmbO1xlKyIPra9UHIhTy
            source_type: api_record
            title: 中国历代人物传记资料库：陳貞（CBDB 437648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437648&o=json
            external_identifier: CBDB:437648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g-tje6iw0RhCVPhjAUTQJJ
        subject_person_id: p_Dg1WdBP4eJ21T75J5qorCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳貞
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhcqk76pf_KvroaBtTCF_s
          claim_id: c_g-tje6iw0RhCVPhjAUTQJJ
          source_id: s_IFAmbO1xlKyIPra9UHIhTy
          stance: supports
          locator: CBDB:437648
          quotation: null
          interpretation_note: CBDB 明确记录的王良玉配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QrpEtBbidXshsDAKeRoMmC
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Dg1WdBP4eJ21T75J5qorCA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g-P8LWXNn_5Z2CKKpQ_juy
          claim_id: c_QrpEtBbidXshsDAKeRoMmC
          source_id: s_IFAmbO1xlKyIPra9UHIhTy
          stance: supports
          locator: CBDB 双向互证（妻子 陳貞）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳貞（1300—1372），元人物。籍贯義烏，身份为好學。（中国历代人物传记资料库 CBDB 437648） | accepted |
| name.primary | 陳貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳貞（CBDB 437648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437648&o=json)
