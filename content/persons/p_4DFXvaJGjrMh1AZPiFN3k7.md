---
schema: wang-person/v1
id: p_4DFXvaJGjrMh1AZPiFN3k7
status: active
merged_into: null
display_name: 王淵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dD4dFv8R8XE7XdN2WY2E2d
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtGBv3bNi7B8bPgAExp7xC
          claim_id: c_dD4dFv8R8XE7XdN2WY2E2d
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: CBDB:8156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8156）
          source: &a1
            id: s_NU9snLL9YRryUoX5Cw8uxa
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 8156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json
            external_identifier: CBDB:8156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6YpJgC36ZAjZUVXunZY2so
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1077年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y5uNPPxcye5BWS8jgCFc1K
          claim_id: c_6YpJgC36ZAjZUVXunZY2so
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
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
        id: c_5RAMhi1HK7KmCoL6ChG9Ps
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bsaLsbkvB6aLKQTXNjwaQG
          claim_id: c_5RAMhi1HK7KmCoL6ChG9Ps
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
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
        id: c_rg4Eb8WGKoyxrNgLWb9pPF
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵（1077年—1129年），宋人物。籍贯熙州，身份为精於騎射，入仕軍員轉補，曾任觀察使、節度使、秘書省校書郎。（中国历代人物传记资料库 CBDB 8156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6HycvnAIn7A9QpMgJ6TajA
          claim_id: c_rg4Eb8WGKoyxrNgLWb9pPF
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: CBDB:8156
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_85PUJCJvmJakWEHLvdFptw
        subject_person_id: p_biGaLdBUf3ZqH93KQ7uZnx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1k2YkfBFdI5CgRVKXVPXe
          claim_id: c_85PUJCJvmJakWEHLvdFptw
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋人傳記資料索引(電子版)，873;877：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_biGaLdBUf3ZqH93KQ7uZnx
        status: active
        display_name: 王懷信
        merged_into_person_id: null
  children:
    - claim:
        id: c_6X0-g5iJrFThZsbROFVWka
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGOVZ2oStNny650005H914
          claim_id: c_6X0-g5iJrFThZsbROFVWka
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JPAuYuPPYN5hwLqZJ733sk
        status: active
        display_name: 王倚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kXWmk6ueIRXcMD0pkcbvNb
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6BJQu6KCqkWtKF1mo8vb68
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DqmdlzX_uyDMnaMYb97eQA
          claim_id: c_kXWmk6ueIRXcMD0pkcbvNb
          source_id: s_pgnOsB1reHck7CdMBwXV47
          stance: supports
          locator: 宋人傳記資料索引(電子版)，873;879：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pgnOsB1reHck7CdMBwXV47
            source_type: api_record
            title: 中国历代人物传记资料库：俱氏(王淵妻)（CBDB 38232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38232&o=json
            external_identifier: CBDB:38232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6BJQu6KCqkWtKF1mo8vb68
        status: active
        display_name: 俱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_atsPDev6Vc3BAk6b3u3fTT
        subject_person_id: p_5NzUrA2mKFb4JcdEQ9g3nA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ruOjCoSu2XDLvsTl_S-KSj
          claim_id: c_atsPDev6Vc3BAk6b3u3fTT
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋人傳記資料索引(電子版)，873;874：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5NzUrA2mKFb4JcdEQ9g3nA
        status: active
        display_name: 王重瞻
        merged_into_person_id: null
    - claim:
        id: c_8SF36si3-DvOCFZZod-NIb
        subject_person_id: p_xXXn6fAPMxYTRtG6zG3M9K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iShQMKUmWL7Kmc32ntQlhH
          claim_id: c_8SF36si3-DvOCFZZod-NIb
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋人傳記資料索引(電子版)，873;876：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xXXn6fAPMxYTRtG6zG3M9K
        status: active
        display_name: 王仕榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| birth.date | 1077年 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | 王淵（1077年—1129年），宋人物。籍贯熙州，身份为精於騎射，入仕軍員轉補，曾任觀察使、節度使、秘書省校書郎。（中国历代人物传记资料库 CBDB 8156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_biGaLdBUf3ZqH93KQ7uZnx | 王懷信 | accepted |
| children | p_JPAuYuPPYN5hwLqZJ733sk | 王倚 | accepted |
| spouses | p_6BJQu6KCqkWtKF1mo8vb68 | 俱氏 | accepted |
| ancestors | p_5NzUrA2mKFb4JcdEQ9g3nA | 王重瞻 | accepted |
| ancestors | p_xXXn6fAPMxYTRtG6zG3M9K | 王仕榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：俱氏(王淵妻)（CBDB 38232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38232&o=json)
- [中国历代人物传记资料库：王淵（CBDB 8156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json)
