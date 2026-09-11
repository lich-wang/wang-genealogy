---
schema: wang-person/v1
id: p_wFAf7mtDmixKTWRc67Dcqf
status: active
merged_into: null
display_name: 鄭氏
revision: 1
cbdb_id: 38312
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mvkKUTPLu5tbtp7hjE-KtP
        subject_person_id: p_wFAf7mtDmixKTWRc67Dcqf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏，宋人物。曾任國夫人。（中国历代人物传记资料库 CBDB 38312）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GliTbFtUdnHgNuDXPfWn2g
          claim_id: c_mvkKUTPLu5tbtp7hjE-KtP
          source_id: s_m259RK7Gsxe6ypFl1DUOzo
          stance: supports
          locator: CBDB:38312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m259RK7Gsxe6ypFl1DUOzo
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王珪妻)（CBDB 38312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38312&o=json
            external_identifier: CBDB:38312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ndcimn_eWJBaxQNwkW6WKl
        subject_person_id: p_wFAf7mtDmixKTWRc67Dcqf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jV65Zey4KFpfIjGwBPqF7_
          claim_id: c_ndcimn_eWJBaxQNwkW6WKl
          source_id: s_m259RK7Gsxe6ypFl1DUOzo
          stance: supports
          locator: CBDB:38312
          quotation: null
          interpretation_note: CBDB 明确记录的王珪配偶
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
        id: c_jdCha5D0hKTWs84EZhBoP3
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wFAf7mtDmixKTWRc67Dcqf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sb2JRfMhWRx71bl_oUveWJ
          claim_id: c_jdCha5D0hKTWs84EZhBoP3
          source_id: s_m259RK7Gsxe6ypFl1DUOzo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;840：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄭氏，宋人物。曾任國夫人。（中国历代人物传记资料库 CBDB 38312） | accepted |
| name.primary | 鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭氏(王珪妻)（CBDB 38312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38312&o=json)
