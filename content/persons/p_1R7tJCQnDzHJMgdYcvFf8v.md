---
schema: wang-person/v1
id: p_1R7tJCQnDzHJMgdYcvFf8v
status: active
merged_into: null
display_name: 王椿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GUEGhwMR7hKxdEoyQxFLwj
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tbem1CP5AEV36qhaSsuyKx
          claim_id: c_GUEGhwMR7hKxdEoyQxFLwj
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: CBDB:202645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202645）
          source: &a1
            id: s_Z2FLbe9bQgBZm3cMUB3yFn
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 202645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json
            external_identifier: CBDB:202645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9e76BWQ5ny2ioEgVD1G2mJ
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gGNknR18R8caFqbH2bYPCu
          claim_id: c_9e76BWQ5ny2ioEgVD1G2mJ
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
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
        id: c_DNBFurvPnE3wabL67KSaRg
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿（生于1505年），明人物。明清進士進士，籍贯錢塘，入仕進士，曾任同知、工部觀政。（中国历代人物传记资料库 CBDB 202645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E3J8_sBWECR8e8bPlo0av0
          claim_id: c_DNBFurvPnE3wabL67KSaRg
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: CBDB:202645
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nfzXWOjaaKBEjm3D2bUX83
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-y4LTvL8XEqUEuUNYM26J
          claim_id: c_nfzXWOjaaKBEjm3D2bUX83
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hPeC8d79fUWi5bNUMWcM89
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children:
    - claim:
        id: c_Zj_hTxJHqT0YpGUsYUdoDa
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rWbTFNGvrAGvijYCj882fN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vt_p68HNPom3lR2Zw9Wfgw
          claim_id: c_Zj_hTxJHqT0YpGUsYUdoDa
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rWbTFNGvrAGvijYCj882fN
        status: active
        display_name: 王夢龍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HJNf8pL8sHoe8sTuyHYgtr
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iyt32TZzYTCVxDHjKXqsyR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7Mq4KlxmMujH5xqixNBh4
          claim_id: c_HJNf8pL8sHoe8sTuyHYgtr
          source_id: s_-HrTHNtl95AbP1q6jvhH-8
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-HrTHNtl95AbP1q6jvhH-8
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王椿妻)（CBDB 291530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291530&o=json
            external_identifier: CBDB:291530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iyt32TZzYTCVxDHjKXqsyR
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_bGAux8ZUexVIUVH-2s3nPk
        subject_person_id: p_zsHWJNVYacVKr1iEB96F37
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYjTuTW15p60b7CFjsj_CK
          claim_id: c_bGAux8ZUexVIUVH-2s3nPk
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zsHWJNVYacVKr1iEB96F37
        status: active
        display_name: 王復初
        merged_into_person_id: null
    - claim:
        id: c_fzkRVwDlt8WqNGA0o7wCKD
        subject_person_id: p_8i21KJqpcnfH33nUAntUEA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lPTO7hNb8C-zCZXeMnWOGH
          claim_id: c_fzkRVwDlt8WqNGA0o7wCKD
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8i21KJqpcnfH33nUAntUEA
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | 王椿（生于1505年），明人物。明清進士進士，籍贯錢塘，入仕進士，曾任同知、工部觀政。（中国历代人物传记资料库 CBDB 202645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hPeC8d79fUWi5bNUMWcM89 | 王璘 | accepted |
| children | p_rWbTFNGvrAGvijYCj882fN | 王夢龍 | accepted |
| spouses | p_iyt32TZzYTCVxDHjKXqsyR | 張氏 | accepted |
| ancestors | p_zsHWJNVYacVKr1iEB96F37 | 王復初 | accepted |
| ancestors | p_8i21KJqpcnfH33nUAntUEA | 王鏞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 202645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json)
- [中国历代人物传记资料库：張氏(王椿妻)（CBDB 291530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291530&o=json)
